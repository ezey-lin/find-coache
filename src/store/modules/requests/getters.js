export default {
  requests(state, _getters, _rootstate, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    //判斷上方getters長度，使用getters參數
    return getters.requests && getters.requests.length > 0;
  },
};
