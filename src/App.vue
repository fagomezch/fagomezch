<template>
  <div id="app">
    <Loading />
    <Slider />
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
import Slider from './components/Slider.vue';

export default {
  name: 'App',
  components: {
    Loading,
    Slider,
  },
};
</script>

<style lang="scss">
  @import './styles/App.scss';
</style>
