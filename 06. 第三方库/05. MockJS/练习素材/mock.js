Mock.mock("/api/cart", "get", {
  code: 0,
  msg: "",
  "data|5-20": [
    {
      selected: "@boolean",
      productName: "@csentence",
      productUrl: "@image(200x100, #ffcc33, #FFF, png, testimage)",
      "unitPrice|1-500.2": 0,
      "count|1-10": 0,
    },
  ],
});
