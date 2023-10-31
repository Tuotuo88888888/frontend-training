<template>
  <div class="about-container" v-loading:relative="loading || !srcLoaded">
    <iframe
      v-if="src"
      :src="src"
      frameborder="0"
      class="about-content"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", { loading: "loading", src: "data" }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.about-content {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
</style>