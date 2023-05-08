<template>
  <div class="image-loader-container">
    <img :src="src" @load="imgLoad" class="img" />
    <img
      :src="placeholder"
      class="filter"
      :class="{ hidden: filterHidden }"
      :style="{ transition: duration + 'ms' }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterHidden: false,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
    load: {
      type: Function,
    },
  },
  methods: {
    imgLoad() {
      this.filterHidden = true;
      this.load?.();
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
.image-loader-container {
  width: max-content;
  height: max-content;
  position: relative;
  overflow: hidden;
  img {
    object-fit: cover;
  }

  .filter {
    .self-fill();
    &.hidden {
      opacity: 0;
    }
  }
}
</style>