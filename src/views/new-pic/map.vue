<!--
 * 勾选列表展示 零售户信息并定位
-->
<template>
  <div style="height:100%">
    <div class="amap-wrapper" id="amapArea"></div>

    <div class="cust-map-drawer">
      <a-card size="small" title="零售户分布">
        <!-- <a-button slot="extra" size="small" @click="back">
          返回
        </a-button> -->
        <a-row>
          <a-col :span="24">
            <a-input-search t v-model="myParam.paras.queryStr" placeholder="零售户名称、联系电话、许可证号、负责人、经营地址" @search="query()" allow-clear title="零售户名称、联系电话、许可证号、负责人、经营地址" />
            * 已选择零售户{{ resultsData.data.length }}个
          </a-col>
          <!-- <a-col :span="24">
            按<a-button-group size="small">
              <a-button>预警数</a-button>
              <a-button>外流量</a-button>
              <a-button>风险指数</a-button>
              <a-button>订购量</a-button>
            </a-button-group>排序
          </a-col> -->
          <a-empty v-if="resultsData.data.length === 0" />
          <div style="text-align: center;">
            <div class="search-list" v-if="resultsData.data.length > 0">
              <a-col :span="24" style="margin-top:10px;" v-for="(data,index) in resultsData.data" :key="index">
                <a-col :span="3" style="color:red;font-weight:bold;font-size:20px;">
                  {{ index + 1 }}
                </a-col>
                <a-col :span="21">
                  <a-col :span="24" style="font-weight:bold;">
                    {{ data.companyName }}
                  </a-col>
                  <a-col :span="24">
                    许可证号：{{ data.licNo }}
                  </a-col>
                  <a-col :span="24">
                    {{ data.contractPerson }}&nbsp;&nbsp;电话：{{ data.retailTel }}
                  </a-col>
                  <a-col :span="12" v-if="source === 'list'">
                    <span style="font-size: 12px;color: #40a9ff;cursor: pointer;" @click="showDetail(data.licNo)">
                      <a-icon type="eye" theme="filled" />查看详情
                    </span>
                  </a-col>
                  <a-col :span="12" v-if="!(data.longitude && data.latitude)">
                    <span style="font-size: 12px;color: #cccccc;">* 该用户无坐标信息</span>
                  </a-col>
                  <a-col :span="12" v-if="(data.longitude && data.latitude)">
                    <span style="font-size: 12px;color: #40a9ff;cursor: pointer;" @click="location(data)">
                      <a-icon type="environment" theme="filled" />定位
                    </span>
                  </a-col>
                </a-col>
              </a-col>
            </div>
          </div>
        </a-row>
      </a-card>
    </div>
    <a-modal :visible="showDetailDialog" title="零售户详情" width="95%" :footer="null" @cancel="closeDialog">
      <retail-cust-detail :lic-no="licNo" :tab-key="'1'" v-if="showDetailDialog" :source="'map'" @location="location" />
    </a-modal>
  </div>
</template>
<script>
import AMap from 'AMap';
// import RetailCustDetail from '@/views/cigaretteManageAnalyse/retailCust/detail';

let that;
export default {
  name: 'CustMap2',
  components: {
    RetailCustDetail: () => import('@/views/cigaretteManageAnalyse/retailCust/detail'),
  },
  props: {
    custList:{
      type: Array,
    },
    // 地图入口，如果是列表打开地图则会显示查询零售户详情按钮，如果零售户详情查看地图则不显示
    // list---列表打开地图,detail---零售户详情查看地图
    source:{
      type: String,
      default: 'list',
    },
  },
  data(){
    // const self = this;
    return {
      map:{},
      markers:[],
      infoWindows:[],
      cluster:[],
      myParam:{
        page:1,
        limit:10,
        pageCount:1,
        paras:{
          queryStr:"",
          orgUuid: this.getSession('user').user.org.orgUuid,
          tags:"",
        },
      },
      spinning:true,
      showDetailDialog:false,
      resultsData:{
        data:[],
        page:1,
      },
      backUrl:'',
      licNo:'',
    };
  },
  created() {
    that = this;
    window.showDetail = that.showDetail;
  },
  mounted(){
    this.resultsData.data = this.custList;
    this.initMap();
    this.addCluster();

    // 如果入口是零售户详情则默认设置第一条数据的坐标为中心点
    if(this.source === 'detail'){
      this.map.setZoomAndCenter(18,[this.custList[0].longitude,this.custList[0].latitude,]);
    }
  },
  methods: {
    // 自定义点聚合样式
    renderClusterMarker(context){
      let count = this.markers.length;

      let factor = Math.pow(context.count / count, 1 / 18);
      let div = document.createElement('div');
      let Hue = 180 - factor * 180;
      let bgColor = 'hsla(' + Hue + ',100%,50%,0.7)';
      let fontColor = 'hsla(' + Hue + ',100%,20%,1)';
      let borderColor = 'hsla(' + Hue + ',100%,40%,1)';
      let shadowColor = 'hsla(' + Hue + ',100%,50%,1)';
      div.style.backgroundColor = bgColor;
      let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20);
      div.style.width = div.style.height = size + 'px';
      div.style.border = 'solid 1px ' + borderColor;
      div.style.borderRadius = size / 2 + 'px';
      div.style.boxShadow = '0 0 1px ' + shadowColor;
      div.innerHTML = context.count;
      div.style.lineHeight = size + 'px';
      div.style.color = fontColor;
      div.style.fontSize = '14px';
      div.style.textAlign = 'center';
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2));
      context.marker.setContent(div);
    },
    // 创建点聚合
    addCluster(){
      this.cluster = new AMap.MarkerClusterer(this.map, this.markers, {
        gridSize: 80,
        renderClusterMarker: this.renderClusterMarker,
      });
    },
    // 初始化地图
    initMap(){
      // 初始化地图
      const dom = document.getElementById('amapArea');
      this.map = new AMap.Map(dom, {
        resizeEnable: true,
        center: [106.550281,29.553466,],
        zoom: 12,
      });
      // 获取有坐标的零售户
      let custData = this.resultsData.data.filter(item => item.latitude && item.longitude);
   
      for (let i = 0; i < custData.length; i += 1) {
        if(custData[i].latitude && custData[i].longitude){
          // 创建地图标记
          let marker = new AMap.Marker({
            position: [custData[i].longitude,custData[i].latitude,],
            content: '<div style="background-color:#f5222d; height: 24px; width: 24px; border: 3px solid #000000; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
            offset: new AMap.Pixel(-15, -15),
          });
          // 构建信息窗体中显示的内容
          let info = [];
          custData[i].licStatus = custData[i].licStatus ? custData[i].licStatus : '未知'; 
          info.push("<div class='input-card content-window-card'> ");
          info.push("<div style=\"padding:7px 0px 0px 0px;\"><h2><a href='#' onclick='showDetail(" + custData[i].licNo + ")'>" + custData[i].companyName + "</a></h2>");
          info.push("<p class='input-item'>地址 : " + custData[i].businessAddr + "</p>");
          info.push("<p class='input-item'>许可证号 : " + custData[i].licNo + "</p>");
          info.push("<p class='input-item'>负责人 :" + custData[i].contractPerson + "   电话 : " + custData[i].retailTel + "</p>");
          info.push("<p class='input-item'>经营状态 :" + custData[i].licStatus  + "</p>");
          info.push("</div></div>");
          // 创建信息窗体
          let infoWindow = new AMap.InfoWindow({
            content: info.join(""),  // 使用默认信息窗体框样式，显示信息内容
            offset: new AMap.Pixel(-3, -15),
          });
          that.infoWindows.push(infoWindow);
          // 鼠标点击marker弹出自定义的信息窗体
          AMap.event.addListener(marker, 'click', function () {
            that.infoWindows[i].open(that.map, marker.getPosition());
            marker.setContent('<div style="background-color:#000000; height: 24px; width: 24px; border: 3px solid #f5222d; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>');
          });
          // 信息窗关闭事件
          AMap.event.addListener(that.infoWindows[i], 'close', function () {
            marker.setContent('<div style="background-color:#f5222d; height: 24px; width: 24px; border: 3px solid #000000; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>');
          });
          that.markers.push(marker);
        }
      }
    },
    // 搜索框
    query(){
      // 从已选数组中筛选零售户
      // 零售户名称、联系电话、许可证号、负责人、经营地址
      if(this.myParam.paras.queryStr){
        let str = this.myParam.paras.queryStr;
        this.resultsData.data = this.resultsData.data.filter(e => e.companyName.includes(str) || e.retailTel.includes(str) || e.licNo.includes(str) || e.contractPerson.includes(str) || e.businessAddr.includes(str));
        
      }else{
        this.resultsData.data = this.custList;
      }
    },
    // back(){
    //   this.$router.push({name: this.backUrl,params:{
    //     custList: JSON.stringify(this.resultsData.data), // 零售户数据，用于地图展示
    //   },});
    // },
    // 点击定位
    location(data){
      this.map.setZoomAndCenter(18,[data.longitude,data.latitude,]);
      // 获取定位的marker
      let mk = this.markers.find(i => i.getPosition().lng === data.longitude && i.getPosition().lat ===  data.latitude);
      mk.setContent('<div style="background-color:#000000; height: 24px; width: 24px; border: 3px solid #f5222d; border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>');
      let mkIndex = this.markers.findIndex(i => i.getPosition().lng === data.longitude && i.getPosition().lat ===  data.latitude);
      // 对应的marker打开信息窗
      this.infoWindows[mkIndex].open(this.map, mk.getPosition());
    },
    // 展开客户详情弹窗
    showDetail(licNo){
      this.licNo = licNo.toString();
      // 关闭父级的打开的零售户详情弹窗，以免套娃
      this.$parent.$parent.$parent.showDetailDialog = false;
      this.showDetailDialog = true;
    },
    // 关闭详情弹窗
    closeDialog(){
      this.showDetailDialog = false;
    },
  },
};
</script>
<style scoped lang="less">
.amap-wrapper {
  width: 100%;
  height: 100%;
}
.cust-map-drawer {
  width: 320px;
  // position: absolute;
  float: right;
  z-index: 99999;
  // margin: -81vh 0px 0px 60vw;
  box-shadow: 1px 1px 5px #cccccc;
  margin-top: -81vh;
}
.search-list {
  max-height: 60vh;
  display: inline-block;
  overflow-y: auto;
  width: 100%;
  text-align: left;
}
</style>
