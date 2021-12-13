import { createStore } from "vuex";
import coaches from "./modules/coaches/index.js";
import requests from "./modules/requests/index.js";
export default createStore({
  state() {
    return {
      userId: "c3",
      isCoach: false,
    };
  },
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
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    isCoach(state) {
      return state.isCoach;
    },
  },
});
