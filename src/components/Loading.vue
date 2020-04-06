<template>
  <transition name="fade">
    <div class="loading" v-if="loading"></div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return {
      loading: true,
    };
  },
  beforeMount() {
    this.loader();
  },
  methods: {
    loader() {
      window.addEventListener('load', () => {
        this.loading = false;
      });
    },
  },
};
</script>

<style lang="scss">
  @import '../styles/components/Loading.scss';
</style>
