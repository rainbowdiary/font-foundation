const path = require("path")
module.exports = {
  mode: "development",
  // mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "rainbow-utils.js",
    // filename: "rainbow-utils.min.js",
    libraryTarget: "umd",  //遵循的规范，能支持哪些平台运行
    library: "rUtils",  //向外暴露的对象的名称
  }
}
