<template>
  <MySwitch v-model="value" />
</template>

<script>
import MySwitch from "./";
export default {
  components: {
    MySwitch,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style>
</style>