import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-20": [
    {
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      "order|+1": 1,
    },
  ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function (options) {
  const {
    page = 1,
    limit = 10,
    categoryid = -1,
  } = qs.parse(options.url.split("?")?.[1]);
  console.log(page, limit, categoryid);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0,
      [`rows|${limit}`]: [
        {
          id: "@guid",
          title: "@ctitle(1,50)",
          description: "@cparagraph(1,10)",
          category: {
            "id|1-10": 0,
            name: "分类@id",
          },
          "scanNumber|0-3000": 0,
          "commentNumber|0-300": 30,
          "thumb|1": [
            Mock.Random.image("300x250", "#000", "#fff", "Random Image"),
            null,
          ],
          createDate: `@date('T')`,
        },
      ],
    },
  });
});
