<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" to="/">Refresh</base-button>
        <base-button link to="/register">register</base-button>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in coaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :areas="coach.areas"
          :rate="coach.hourlyRate"
        ></CoachItem>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    CoachItem,
  },
  computed: {
    // filteredCoaches() {
    //   return this.$store.getters["coaches/coaches"];
    // },
    ...mapGetters({
      coaches: "coaches/coaches",
      hasCoaches: "coaches/hasCoaches",
    }),
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
