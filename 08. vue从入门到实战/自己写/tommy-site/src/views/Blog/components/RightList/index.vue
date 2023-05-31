<template>
  <ul class="right-list-container">
    <li
      v-for="(item, i) in list"
      :key="i"
      :class="{ active: item.isSelect }"
      @click="handleClick(item)"
    >
      <span>{{ item.name }}</span>
    </li>
    <RightList :list="item.children" @select="handleClick" />
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    height: 40px;
    line-height: 40px;
  }
}
</style>