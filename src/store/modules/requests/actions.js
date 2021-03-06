export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    const respones = await fetch(
      `https://find-coach-vue-6f1e9-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = await respones.json();
    if (!respones.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    console.log(responseData);
    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    if (!context.getters.shouldUpdate) return;
    const coachId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const respones = await fetch(
      `https://find-coach-vue-6f1e9-default-rtdb.firebaseio.com/requests/${coachId}.json?auth=${token}`
    );
    const responseData = await respones.json();
    if (!respones.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }
    context.commit("setRequests", requests);
    context.commit("setFetchTimestamp");
  },
};
