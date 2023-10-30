<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'load'">
      <router-link to="/user">{{ user.name }}</router-link>
      <a @click.prevent="handleUnLoad" href="">退出</a>
    </template>
    <router-link v-else to="/login" exact-path>Login</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]),
    ...mapState("loginUser", { user: "data" }),
  },
  methods: {
    handleUnLoad() {
      this.$store.dispatch("loginUser/asyncLoginOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.user-name {
  display: inline-block;
}
.user-name a,
.user-name span {
  margin-right: 15px;
}
</style>
