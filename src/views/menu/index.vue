<template>
  <div class="menuItem">
    <div class="menuItem-title">
      <div class="menuItem-title-left rui-theader-title">角色管理 {{ $store.state.system.a }}</div>
      <div class="menuItem-title-right">
        <el-button type="primary" @click="handleAdd" size="mini">新增</el-button>
        <i class="el-icon-refresh-right ml" @click="handleRefresh" ></i>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :row-style="enter"
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column property="date" label="名称" width="150">
      </el-table-column>
      <el-table-column property="name" label="标识" width="120">
      </el-table-column>
      <el-table-column property="address" label="备注"> </el-table-column>
      <el-table-column property="address1" label="创建时间"> </el-table-column>
      <el-table-column property="address2" label="更新时间"> </el-table-column>
      <el-table-column property="address3" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" style="margin-right:20px" >编辑</el-button>
          <el-popconfirm title="确定删除吗？"  >
            <el-button
             slot="reference"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <Fullscreen
      :visible.sync="visible" 
      :title="title"
      width="1000px"
      @ok="handleCancel"
      :defaultFull="false"
    >
      <template #content>
        <Menu-add v-if="titleType === 'A'" />
        <Menu-edit v-if="titleType === 'B'" />
      </template>
    </Fullscreen>
    <jsx />
   </div>
</template>

<script>
import Fullscreen from "@/components/FullscreenModal.vue";
import jsx from '@/components/jsx.vue'
import MenuAdd from "./MenuAdd.vue";
import MenuEdit from "./MenuEdit.vue";
export default {
  name: "menuItem",
  components: { Fullscreen, MenuAdd, MenuEdit,jsx },
  data() {
    return {
      formInline: {},
      titleType: undefined,
      visible: false,
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 31,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 32,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {},
  computed: {
    title() {
      if (this.titleType === "A") {
        return "新增";
      }
      if (this.titleType === "B") {
        return "编辑";
      }
      return null
    },
  },
  methods: {
    handleEdit() {
      this.titleType = "B";
      this.visible = true;
    },
    enter(data){
      if(data){
        return {'cursor':'pointer'}
      }
    },
    handleDelete() {},
    handleCancel() {
      this.visible = false;
    },
    handleRefresh() {},
    handleAdd() {
      this.titleType = "A";
      this.visible = true;
    },
  },
};
</script>
<style scoped lang='less'>
.menuItem {
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  flex-direction: column;
  height: 100%;
  &-title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    &-left {
    }
    &-right {
    }
  }
}
</style>