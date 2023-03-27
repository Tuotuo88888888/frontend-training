/**
 * 从网络获取当前的英雄数据
 * @returns Promise
 */
async function getHeroes() {
  return fetch("https://study.duyiedu.com/api/herolist")
    .then((resp) => resp.json())
    .then((resp) => resp.data.reverse());
}

const doms = {
  nav: document.querySelector(".nav"),
  heroList: document.querySelector(".heroList"),
  search: document.querySelector(".search"),
  heroAll: null,
};
const datas = {
  heroList: [],
  navData: [
    {
      title: "综合",
      key: "pay_type",
      children: [
        { title: "本周免费", key: 10 },
        { title: "新手推荐", key: 11 },
      ],
    },
    {
      title: "定位",
      key: "hero_type",
      getFilterFn(i) {
        if (i === 0) {
          return () => true;
        }
        return (h) => h.hero_type === i || h.hero_type2 === i;
      },
      children: [
        { title: "全部", key: 0, className: "hero_type_all" },
        { title: "坦克", key: 3 },
        { title: "战士", key: 1 },
        { title: "刺客", key: 4 },
        { title: "法师", key: 2 },
        { title: "射手", key: 5 },
        { title: "辅助", key: 6 },
      ],
    },
  ],
};
async function main() {
  await initData();
  initPage();
  bindEvents();
  mounted();
}
async function initData() {
  try {
    datas.heroList = await getHeroes();
  } catch (e) {
    console.log(e);
  }
}
function initPage() {
  doms.nav.innerHTML = datas.navData
    .map(
      (n) => `<li>
    <h4 class="navTitle">${n.title}</h4>
    <ul class="subnav">
      ${n.children
        .map(
          (sn) => `<li>
          <label>
            <input type="radio" name="nav" data-type="${
              n.key
            }" data-type-index="${sn.key}" ${
            sn.className ? `class="${sn.className}"` : ""
          } />
            ${sn.title}
          </label>
        </li>`
        )
        .join("\n")}
    </ul>
    </li>`
    )
    .join("\n");
}
function bindEvents() {
  doms.nav.addEventListener(
    "change",
    function ({ target }) {
      if (target.nodeName === "INPUT" && target.name === "nav") {
        showHeroByType(target.dataset.type, target.dataset.typeIndex);
      }
    },
    true
  );
  doms.search.addEventListener("input", function () {
    showHeroBySearch(this.value);
  });
}
function showHeroByType(type, typeIndex) {
  typeIndex = +typeIndex;
  let filterFn =
    datas.navData
      .find((i) => i.key === type && i.getFilterFn)
      ?.getFilterFn(typeIndex) ?? ((hero) => hero[type] == typeIndex);

  shwoHeroList(datas.heroList.filter(filterFn));
}
function showHeroBySearch(search) {
  shwoHeroList(
    datas.heroList.filter((h) => h.cname.includes(search)),
    search
  );
  doms.heroAll.checked = true;
}
function shwoHeroList(heroList, keyword = null) {
  doms.heroList.innerHTML = heroList
    .map(
      ({ ename, cname }) => `
    <a
      class="hero"
      href="https://pvp.qq.com/web201605/herodetail/${ename}.shtml"
      target="_blank"
    >
      <img
        src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg"
        alt=""
      />
      <span>${cname.replace(keyword, (s) => `<em>${s}</em>`)}</span>
    </a>
  `
    )
    .join("");
}
function mounted() {
  doms.heroAll = document.querySelector(".hero_type_all");
  doms.heroAll.checked = true;
  doms.heroAll.dispatchEvent(new Event("change"), {
    bubbles: true,
  });
}

main();
