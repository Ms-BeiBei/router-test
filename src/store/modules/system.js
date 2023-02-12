const system = {
  state: () => ({
    a: 1,
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
    ],
  }),
  mutations: {
    increment(state) {
      state.a++;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("increment");
          resolve();
        }, 2000);
      });
    },
  },
  getters: {
    bit(state) {
      console.log(state);
      return state.todos.length;
    },
  },
};

export default system;
