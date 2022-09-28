import Vue from 'vue'
import Vuex from 'vuex'
// import { mapState } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //state  是存放数据
    test: 1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos (state) { 
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) { //Getter 也可以接受其他 getter 作为第二个参数
      return getters.doneTodos.length
    }
  },
  mutations: {   //  是同步修改state中的数据
    add(state){
      state.test += 1
    },
    test(state){
      state.test += 4
    }
  },
  
  actions: {
  },
  modules: {
  }
})

