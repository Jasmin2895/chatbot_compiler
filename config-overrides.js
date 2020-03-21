const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = function override(config, env) {
  config.resolve = {};
  config.plugins.push(
    new MonacoWebpackPlugin({
      features: ["!gotoSymbol"],
      languages: ["javascript", "typescript", "python", "java", "ruby"]
    })
  );
  return config;
};
