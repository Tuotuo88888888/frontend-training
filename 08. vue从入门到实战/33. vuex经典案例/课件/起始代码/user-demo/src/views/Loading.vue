<template>
  <div>正在登录中...</div>
</template>

<script>
export default {
  created() {
    this.$watch(
      () => this.$store.getters["loginUser/status"],
      (status) => {
        if (status !== "loading") {
          this.$router.push(this.$route.query.redirect ?? "/");
        }
      },
      {
        immediate: true,
      }
    );
  },
};
</script>

<style>
</style>