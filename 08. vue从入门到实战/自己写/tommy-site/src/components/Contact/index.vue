<template>
  <div class="contact-container">
    <a href="" class="item">
      <Icon type="github" />
      <span>DuYi-Edu</span>
    </a>
    <a href="" class="item">
      <Icon type="mail" />
      <span>duyi@gmail.com</span>
    </a>
    <a
      href="tencent://message/?Menu=yes&uin=2646218690&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
      class="item"
    >
      <Icon type="qq" />
      <span>3263023350</span>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </a>
    <a href="" class="item">
      <Icon type="weixin" />
      <span>yh777bao</span>
      <div class="pop">
        <img
          src="http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
          alt=""
        />
      </div>
    </a>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import url("~@/styles/var.less");
@import url("~@/styles/mixin.less");
.contact-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
  .item {
    position: relative;
    color: @lightWords;
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    &:hover {
      color: @primary;
    }
    &:not(:hover) {
      @keyframes item-color {
        from {
          color: white;
        }
        to {
          color: @lightWords;
        }
      }
      animation: 1s item-color;
    }
    .icon-container {
      font-size: 2em;
    }
    .pop {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 200px;
      bottom: 100%;
      background: white;
      border-radius: 8px;
      &::after {
        content: "";
        display: block;
        width: 0;
        border: 10px solid transparent;
        border-bottom-color: white;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translate(-50%, 100%) rotate(180deg);
      }
      img {
        width: 80%;
        height: 80%;
        .self-center();
        object-fit: cover;
      }
      transition: 0.5s;
      transform-origin: bottom;
      transform: translateX(-50%) scaleY(0);
    }
    &:hover .pop {
      transform: translateX(-50%) scaleY(1);
    }
  }
}
</style>