module.exports = {
  openApi: [
    {
      requestLibPath: "./request.js", // 想怎么引入封装请求方法 api文件夹下的请求主文件 request.js
      schemaPath: "https://localhost:7090/swagger/v1/swagger.json", // openAPI规范地址
      projectName: "", // 生成到哪个目录内 serversPath下的目录
      apiPrefix: "", // 需不需要增加前缀
      serversPath: "./src/api", // 生成代码到哪个目录
      hook: {
        // 自定义方法
        customFunctionName: (data) => {
          return data.operationId.replace(/^([A-Z])/g, (match, p1) => p1.toLowerCase());
        },
      },
    },
  ],
};
