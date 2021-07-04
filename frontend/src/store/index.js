import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: [
      {
        titre: "Hello world",
        text: "fdsbv ml ;sdfl gm! sdf gfdml; dfmls g fds"
      },
      {
        titre: "Message numéros 2",
        text: "kgsndfkl kfd gdfk fdks gdf fdsbv ml ;sdfl gm! sdf gfdml; dfmls g fds"
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
