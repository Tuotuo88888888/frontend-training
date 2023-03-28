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
  const sf = selectToHTML(datas.selectData, { label: "请选择省份" });
  const cs = selectToHTML([], { label: "请选择城市" });
  const dq = selectToHTML([], { label: "请选择地区" });
  sf.onchange = function (val) {
    const csItems = datas.selectData.find((i) => i.value === val)?.children;
    cs.updataItems(csItems);
    dq.updataItems([]);

    cs.onchange = function (val) {
      const dqItems = csItems.find((i) => i.value === val)?.children;
      dq.updataItems(dqItems);
    };
  };
  doms.container.append(sf, cs, dq);
}
function bindEvents() {}
function selectToHTML(
  data,
  { label = "请选择", defaultValue = "", change = null, lock = true } = {}
) {
  const select = document.createElement("div");
  select.className = "select";
  select.innerHTML = `<div class="display">
    <label></label>
    <i class="iconfont iconarrow-up"></i>
  </div>
  <ul class="list">
  </ul>`;

  const displayDom = select.querySelector(".display");
  const listDom = select.querySelector(".list");
  const labelDom = displayDom.querySelector("label");

  _updataItems(data);
  _setSelected(defaultValue);
  function _toggle() {
    if (!select.classList.contains("disabled")) {
      const expandSelect = doms.container.querySelector(".select.expand");
      expandSelect &&
        expandSelect !== select &&
        expandSelect.classList.remove("expand");
      select.classList.toggle("expand");
    }
  }
  function _updataItems(arr = [], val) {
    data = arr;
    if (arr.length === 0) {
      select.classList.add("disabled");
    } else {
      select.classList.remove("disabled");
    }
    listDom.innerHTML = arr
      .map((option) => `<li data-value="${option.value}">${option.label}</li>`)
      .join("\n");
    _setSelected(val);
  }
  function _setSelected(val) {
    _setActive(val);
    select.dataset.value = val;
    labelDom.innerText = data.find((i) => i.value === val)?.label ?? label;
  }
  function _setActive(val) {
    const activeLi = listDom.querySelector(".active");
    activeLi && activeLi.classList.remove("active");
    Array.from(listDom.children)
      .find((i) => i.dataset.value === val)
      ?.classList.add("active");
  }
  displayDom.addEventListener("click", _toggle);
  listDom.addEventListener("click", function ({ target }) {
    if (target.nodeName === "LI") {
      const val = target.dataset.value;
      _setSelected(val);
      _toggle();
      select.onchange && select.onchange(val);
    }
  });
  select.updataItems = _updataItems;

  return select;
}
main();
