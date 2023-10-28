export default function (refValue) {
  return {
    mounted() {
      this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
    },
    beforeDestroy() {
      this.$bus.$emit("mainScroll");
      this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    },
    methods: {
      handleMainScroll() {
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].scrollTop = scrollTop;
      },
    },
  };
}
