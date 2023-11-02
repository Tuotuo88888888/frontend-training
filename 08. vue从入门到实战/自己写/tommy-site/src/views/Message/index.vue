<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      @submit="handleSubmit"
      title="留言板"
      :subTitle="`(${data.total})`"
      :isListLoading="isLoading"
      :list="data.rows"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import moreMessage from "@/mixins/moreMessage";
import { getMessages, postMessage } from "@/api/message";
export default {
  components: {
    MessageArea,
  },
  mixins: [
    fetchData({ total: 0, rows: [] }),
    mainScroll("messageContainer"),
    moreMessage,
  ],
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  methods: {
    async fetchData() {
      return await getMessages(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postMessage(formData);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("感谢您的留言");
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-y: auto;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>