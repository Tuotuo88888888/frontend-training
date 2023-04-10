$(function () {
  $(":checkbox.checkAll").change(function (e) {
    $(":checkbox.checkItem,:checkbox.checkAll")
      .not(this)
      .prop("checked", this.checked);
    setTotal();
  });
  $(":checkbox.checkItem").change(function (e) {
    $(":checkbox.checkAll").prop(
      "checked",
      $(":checkbox.checkItem")
        .toArray()
        .every((i) => i.checked)
    );
    setTotal();
  });
  $(".decr").click(function (e) {
    e.preventDefault();
    const input = $(this).nextAll(".txt");
    const newNumber = +input.val() - 1;
    changeNumber(newNumber, input);
  });
  $(".incr").click(function (e) {
    e.preventDefault();
    const input = $(this).prevAll(".txt");
    const newNumber = +input.val() + 1;
    changeNumber(newNumber, input);
  });
  $(".del").click(function (e) {
    e.preventDefault();
    $(this).parents(".item").remove();
    setTotal();
  });
  $(".delChecked").click(function (e) {
    e.preventDefault();
    $(":checkbox.checkItem:checked").parents(".item").remove();
    setTotal();
  });
  $(".clearAll").click(function (e) {
    e.preventDefault();
    $(".item").remove();
    setTotal();
  });
});

function changeNumber(val, el) {
  if (val < 1) {
    val = 1;
  }
  el.val(val);
  const parent = el.parents(".item");
  const price = +parent.find(".price em").text().replace("￥", "");
  const sum = val * price;
  parent.find(".sum em").text(`￥${sum.toFixed(2)}`);
  setTotal();
}
function setTotal() {
  const selectedProduct = $(":checkbox.checkItem:checked").parents(".item");
  let total = 0;
  selectedProduct.find(".sum em").each(function (e) {
    total += +$(this).text().replace("￥", "");
  });
  $(".footer .sums em").text(`￥${total.toFixed(2)}`);
  $(".footer .nums em").text(selectedProduct.length);
}
