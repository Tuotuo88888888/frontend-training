<template>
  <button @click="handleClick">{{ content }}</button>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 10,
    },
    content: {
      type: String,
      default: "click",
    },
  },
  data() {
    return {
      newCount: 0,
    };
  },
  methods: {
    handleClick() {
      this.newCount++;
      if (this.newCount % this.count === 0) {
        this.$emit("nclick", this.newCount);
        this.newCount = 0;
      }
    },
  },
};
</script>

<style>
</style>