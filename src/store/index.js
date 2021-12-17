import { createStore } from "vuex";
import coaches from "./modules/coaches/index.js";
import requests from "./modules/requests/index.js";
import auth from "./modules/auth/index";
export default createStore({
  mutations: {
    setIsCoach(state) {
      state.isCoach = true;
    },
  },
  actions: {
    setIsCoach(context) {
      context.commit("setIsCoach");
    },
  },
  modules: {
    coaches,
    requests,
    auth,
  },
  getters: {
    isCoach(state) {
      return state.isCoach;
    },
  },
});
