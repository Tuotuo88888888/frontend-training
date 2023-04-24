const {
  text: { length },
  wordDuration,
} = require("./config");
const delay = require("./delay");
const print = require("./print");
/**
 * 运行该函数，会逐字打印config.js中的文本
 * 每个字之间的间隔在config.js已有配置
 */
async function run() {
  for (const i in Array(length).fill(0)) {
    print(i);
    await delay(wordDuration);
  }
}

run();
