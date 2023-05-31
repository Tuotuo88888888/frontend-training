<template>
  <NClick @nclick="handleNClick" :count="1" :content="666" />
</template>

<script>
import NClick from "./";
export default {
  components: {
    NClick,
  },
  methods: {
    handleNClick(n) {
      alert(n);
    },
  },
};
</script>

<style>
</style>