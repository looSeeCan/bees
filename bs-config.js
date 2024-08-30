module.exports = {
  proxy: "localhost:5001",
  files: ["src/public/**/*.*", "views/**/*.*"],
  ignore: ["node_modules"],
  reloadDelay: 10,
  ui: false,
  notify: false,
  port: 3001,
};
