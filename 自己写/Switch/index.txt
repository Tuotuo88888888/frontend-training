<template>
  <div
    class="switch-container"
    :class="{ select: value }"
    @click="handleClick"
  ></div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style scoped>
.switch-container {
  width: 50px;
  height: 25px;
  border-radius: 25px;
  background: #ff4949;
  transition: 0.5s;
  position: relative;
}
.switch-container.select {
  background: #13ce66;
}
.switch-container::before {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  display: block;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: 0.5s;
}
.switch-container.select::before {
  left: calc(100% - 22px);
}
</style>