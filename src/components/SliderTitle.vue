<template>
  <h1 class="slider__title">
    Hi, I’m Fernando
    <div
      :key="item.id"
      class="slider__transition"
      v-for="(item, index) in items"
      >
      <transition name="fade">
        <span v-if="currentItem === index" class="slider__text">
          {{ item }}
        </span>
      </transition>
    </div>
  </h1>
</template>

<script>
export default {
  name: 'SliderCopy',
  data() {
    return {
      items: ['Web Engineer.', 'Frontend dev.', 'JavaScript lover.'],
      currentItem: 0,
      show: true,
    };
  },
  mounted() {
    setInterval(() => {
      this.currentItem += 1;

      if (this.items.length <= this.currentItem) {
        this.currentItem = 0;
      }
    }, 5000);
  },
};
</script>

<style lang="scss">
  @import '../styles/components/SliderTitle.scss';
</style>
