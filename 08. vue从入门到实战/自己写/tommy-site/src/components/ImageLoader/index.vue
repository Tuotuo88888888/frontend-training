<template>
  <img :src="src" alt="" class="image-loader-container" />
</template>

<script>
export default {
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
  },
};
</script>

<style lang="less" scoped>
.image-loader-container {
  width: 400px;
  height: 280px;
  object-fit: cover;
}
</style>