import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      requests: [],
    };
  },
  getters,
  mutations,
  actions,
};
