export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        isLoading: true,
        data: defaultDataValue,
      };
    },
    async created() {
      this.data = await this.fetchData();
      this.onceUpdateData && this.onceUpdateData(this.data);
      this.isLoading = false;
    },
  };
}
