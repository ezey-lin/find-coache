<template>
  <div>
    <form @submit.prevent="submitForm()">
      <base-dialog
        :show="!!error"
        title="An error occurred"
        @close="handleError"
      >
        <p>{{ error }}</p>
      </base-dialog>
      <base-dialog
        :show="isLoading"
        title="Authenticating.."
        fixed
        @close="handleError"
      >
        <base-spinner></base-spinner>
      </base-dialog>
      <base-card>
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="passWord" />
        </div>
        <base-button> {{ submitBtnCaption }} </base-button>
        <base-button type="button" mode="flat" @click="switchMode">
          {{ switchModeBtnCaption }}
        </base-button>
      </base-card>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formIsValid: false,
      email: "",
      passWord: "",
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitBtnCaption() {
      if (this.mode === "login") return "Login";
      else return "SignUp";
    },
    switchModeBtnCaption() {
      if (this.mode === "login") return "Switch to SignUp";
      else return "Switch to Login";
    },
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.passWord.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      const userInfo = {
        email: this.email,
        password: this.passWord,
      };
      try {
        if (this.mode === "login") {
          await this.$store.dispatch("login", userInfo);
        } else {
          await this.$store.dispatch("signup", userInfo);
        }
      } catch (err) {
        this.error = err || "Failed to authenticate";
      }
      this.isLoading = false;
    },
    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>