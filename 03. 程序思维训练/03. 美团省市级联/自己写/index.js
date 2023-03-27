/**
 * 远程获取省市区数据，当获取完成后，得到一个数组
 * @returns Promise
 */
async function getDatas() {
  return fetch("https://study.duyiedu.com/api/citylist")
    .then((resp) => resp.json())
    .then((resp) => resp.data);
}

const datas = {
  selectData: null,
};
const doms = {
  container: document.querySelector(".container"),
  select: document.querySelector(".select"),
};

async function main() {
  await initData();
  initPage();
  bindEvents();
}
async function initData() {
  try {
    datas.selectData = await getDatas();
  } catch (e) {
    console.log(e.message);
  }
}
function initPage() {
  doms.container.innerHTML = "";
  doms.container.appendChild(
    selectToHTML(datas.selectData, { label: "请选择省份" })
  );
}
function bindEvents() {}
function selectToHTML(
  data,
  { label = "请选择", defaultValue = "", change = null } = {}
) {
  const showLabel = label;
  const defaultItem = data.find((i) => i.value === defaultValue);
  defaultItem && (showLabel = defaultItem.label);

  const select = document.createElement("div");
  select.className = "select";
  select.dataset.value = defaultValue;
  select.innerHTML = `<div class="display">
    <label>${showLabel}</label>
    <i class="iconfont iconarrow-up"></i>
  </div>
  <ul class="list">
  ${data
    .map((option) => `<li data-value="${option.value}">${option.label}</li>`)
    .join("\n")}
  </ul>`;

  const displayDom = select.querySelector(".display");
  const listDom = select.querySelector(".list");
  const labelDom = displayDom.querySelector("label");
  function _toggleShow() {
    select.classList.toggle("show");
  }
  displayDom.addEventListener("click", _toggleShow);
  listDom.addEventListener("click", function ({ target }) {
    if (target.nodeName === "LI") {
      const activeLi = this.querySelector(".active");
      activeLi && activeLi.classList.remove("active");
      target.classList.add("active");
      labelDom.innerText = target.innerText;
      select.dataset.value = target.dataset.value;
      _toggleShow();
      change && change(target.dataset.value);
    }
  });

  return select;
}
main();
