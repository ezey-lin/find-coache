export default {
  async login(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF9U8iH4YeOhzQT8iJq71z8-Saa1K7D2M",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();
    const errMsg = responseData.error ? responseData.error.message : "";
    console.log(errMsg);
    if (!response.ok) {
      const error = new Error(
        errMsg || "Failed to authenticate. Check your login data."
      );
      throw error;
    }
    console.log(response);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF9U8iH4YeOhzQT8iJq71z8-Saa1K7D2M",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );
    const responseData = await response.json();
    const errMsg = responseData.error ? responseData.error.message : "";
    if (!response.ok) {
      console.log(responseData);
      const error = new Error(
        errMsg || "Failed to authenticate. Check your login data."
      );
      throw error;
    }
    console.log(response);
    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
