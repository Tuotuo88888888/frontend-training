<template>
  <div id="app">
    <Pager
      :total="200"
      :current="current"
      :visibleNumber="4"
      @pageChange="pageChange"
    />
  </div>
</template>

<script>
import Pager from "./components/Pager.vue";

export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return { current: 1 };
  },
  methods: {
    pageChange(newPage) {
      console.log("切换页面");
      this.current = newPage;
    },
  },
};
</script>

<style lang="less">
</style>
