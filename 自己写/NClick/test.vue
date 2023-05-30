<template>
  <NClick @nclick="handleNClick" />
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