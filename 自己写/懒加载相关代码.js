{
  const { scrollTop, clientHeight, scrollHeight } = this.$refs.tbody;

  const recycleSpacing = 1 * this.rowHeight;
  if (this.$refs.topLazy) {
    const { offsetHeight: topLazyHeight } = this.$refs.topLazy;
    if (scrollTop < topLazyHeight) {
      this.curStartIndex -= this.onceLazyNumber;
    } else if (scrollTop > topLazyHeight + recycleSpacing) {
      const beyondHeight = scrollTop - (topLazyHeight + recycleSpacing);
      this.curStartIndex += Math.floor(beyondHeight / this.rowHeight);
    }
  }

  if (this.$refs.bottomLazy) {
    const { offsetHeight: bottomLazyHeight } = this.$refs.bottomLazy;
    if (scrollTop + clientHeight > scrollHeight - bottomLazyHeight) {
      this.curEndIndex += this.onceLazyNumber;
    } else if (
      scrollTop + clientHeight <
      scrollHeight - bottomLazyHeight - recycleSpacing
    ) {
      const beyondHeight =
        scrollHeight -
        bottomLazyHeight -
        recycleSpacing -
        (scrollTop + clientHeight);
      this.curEndIndex -= Math.floor(beyondHeight / this.rowHeight);
    }
  }

  if (this.curStartIndex < 0) {
    this.curStartIndex = 0;
  }
  if (this.curEndIndex > this.dataList.length) {
    this.curEndIndex = this.dataList.length;
  }

  if (this.curStartIndex > this.curEndIndex) {
    this.curStartIndex = this.curEndIndex;
  }

  console.log(this.curStartIndex, this.curEndIndex);
}
{
  const { scrollTop } = this.$refs.tbody;

  const startLocation = this.curStartIndex * this.rowHeight;
  const endLocation = this.curEndIndex * this.rowHeight;

  if (scrollTop >= startLocation && scrollTop < endLocation) {
    return;
  }

  if (scrollTop < startLocation) {
    const beyond = startLocation - scrollTop;
    const curPageHeight = this.rowHeight * this.curPageLimit;
    const beyondPageNumber = Math.ceil(beyond / curPageHeight);
    this.curStartIndex -= beyondPageNumber * this.curPageLimit;
    if (this.curStartIndex < 0) {
      this.curStartIndex = 0;
    }
  }

  if (scrollTop >= endLocation) {
    const beyond = scrollTop - endLocation;
    const curPageHeight = this.rowHeight * this.curPageLimit;
    const beyondPageNumber = Math.ceil(beyond / curPageHeight);
    this.curStartIndex += beyondPageNumber * this.curPageLimit;
    if (this.curStartIndex > this.totalCount) {
      this.curStartIndex = this.totalCount - this.curPageLimit;
    }
  }

  console.log(this.curStartIndex, this.curEndIndex);
}
