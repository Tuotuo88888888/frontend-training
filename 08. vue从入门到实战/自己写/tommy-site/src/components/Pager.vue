<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current == 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{ disabled: current == 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: current == n }"
    >
      {{ n }}
    </a>
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current == pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current == pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    numbers() {
      return Array(this.visibleMax - this.visibleMin + 1)
        .fill(0)
        .map((_, i) => i + this.visibleMin);
    },
  },
};
</script>
<style lang="less">
@import url("~@/styles/var.less");
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    user-select: none;
    color: @primary;
    margin: 0 6px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>