<template>
  <img :src="loadingUrl" alt="" class="loading-container" />
</template>

<script>
import loadingUrl from "@/assets/loading.svg";
export default {
  data() {
    return {
      loadingUrl,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/mixin.less");
.loading-container {
  .self-center();
}
</style>