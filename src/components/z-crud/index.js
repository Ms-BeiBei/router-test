import ZCrud from './src/index'

ZCrud.install = function (Vue) {
    Vue.component(ZCrud.name, ZCrud)
}

export default ZCrud