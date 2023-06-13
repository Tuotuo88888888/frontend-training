<template>
  <ul class="right-list-container">
    <li
      v-for="(item, i) in list"
      :key="i"
      :class="{ active: item.isSelect }"
      @click.stop="handleClick(item)"
    >
      <span>{{ item.name }}</span>
      <span v-if="item.aside" class="aside">{{ item.aside }}</span>
      <RightList
        v-if="item.children"
        :list="item.children"
        @select="handleClick"
      />
    </li>
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
@import url("~@/styles/var.less");
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    &.active > span {
      color: @warn;
      font-weight: bold;
    }
    .aside {
      color: @gray;
      font-size: 12px;
      margin-left: 1em;
    }
  }
}
</style>