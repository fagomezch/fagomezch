<template>
  <div class="col slider__copy">
    <span>Since 2016</span>
    <SliderTitle />
    <h2 class="slider__subtitle">Based in COL </h2>
    <SocialNetworks />
  </div>
</template>

<script>
import SocialNetworks from './SocialNetworks.vue';
import SliderTitle from './SliderTitle.vue';

export default {
  name: 'SliderCopy',
  components: {
    SliderTitle,
    SocialNetworks,
  },
};
</script>

<style lang="scss">
  @import '../styles/components/SliderCopy.scss';
</style>
