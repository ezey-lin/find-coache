<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink"> Contact </base-button>
        </header>
        <!-- coachContact -->
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        >
        </base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
    <!-- <p>abc</p> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    ...mapGetters({
      coaches: "coaches/coaches",
      // hasCoaches: "coaches/hasCoaches",
    }),
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.id + "/contact";
    },
  },
  created() {
    console.log(this.id);
    console.log(this.coaches.find((coach) => coach.id === this.id));
    // console.log(this.$store.getters['coaches/coaches']);
    this.selectedCoach = this.coaches.find((coach) => coach.id === this.id);
  },
};
</script>
