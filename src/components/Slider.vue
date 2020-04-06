<template>
  <div class="slider__item">
    <div class="container">
      <div class="row">
        <SliderImage />
        <SliderCopy />
      </div>
    </div>
  </div>
</template>

<script>
import SliderCopy from './SliderCopy.vue';
import SliderImage from './SliderImage.vue';

export default {
  name: 'Slider',
  components: {
    SliderCopy,
    SliderImage,
  },
};
</script>

<style lang="scss">
  @import '../styles/components/Slider.scss';
</style>
