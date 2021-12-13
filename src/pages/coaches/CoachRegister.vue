<template>
  <section>
    <base-card>
      <h2>register as a coach now!</h2>
      <coach-form @add-coach="addCoach"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from "../../components/coaches/CoachForm.vue";

export default {
  components: {
    CoachForm,
  },
  methods: {
    addCoach(formData) {
      console.log(formData);
      this.$store.dispatch("coaches/registerCoach", formData);
      this.$router.replace("/coaches");
      this.$store.dispatch("setIsCoach");
      // push可以返回，replace不可返回
    },
  },
};
</script>
