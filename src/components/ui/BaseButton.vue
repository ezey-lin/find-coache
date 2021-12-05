<template>
  <button v-if="!link">
    <slot></slot>
  </button>
  <router-link v-else>
    <slot></slot>
  </router-link>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      require: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false,
    },
    link: {
      type: Boolean,
      require: false,
      default: false,
    },

    to: {
      type: String,
      require: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: false,
    },
  },
};
</script>
<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>
