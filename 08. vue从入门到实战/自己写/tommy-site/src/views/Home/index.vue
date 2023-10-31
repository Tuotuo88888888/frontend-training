<template>
  <div
    class="home-container"
    ref="container"
    @wheel="handleWheel"
    v-loading="loading"
  >
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem v-if="item.isLoad" :carousel="item" />
      </li>
    </ul>
    <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import Icon from "./../../components/Icon";
import Carouselitem from "./Carouselitem.vue";
import { getBanners } from "./../../api/banner";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
    Carouselitem,
  },
  created() {
    this.$store
      .dispatch("banner/fetchBanners")
      .then(() => this.setCurrentItemLoad());
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },

  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false,
    };
  },
  methods: {
    setCurrentItemLoad() {
      this.$store.commit("banner/setDataItemLoadStatus", this.index);
    },
    switchTo(i) {
      this.index = i;
      // this.data[i].isLoad = true;
      this.setCurrentItemLoad();
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        this.switching = true;
        this.switchTo(this.index - 1);
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.switchTo(this.index + 1);
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData() {
      return await getBanners();
    },
    // onceUpdateData(data) {
    //   this.data = data.map((i) => ({ ...i, isLoad: false }));
    //   this.data[this.index].isLoad = true;
    // },
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    this.$store.commit("banner/setDataAllUnLoadStatus");
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 500ms;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    @gap: 25px;
    font-size: 30px;
    .self-center();
    color: @gray;
    cursor: pointer;
    transform: translate(-50%);
    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center();
    transform: translateY(-50%);
    left: auto;
    right: 20px;

    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>
