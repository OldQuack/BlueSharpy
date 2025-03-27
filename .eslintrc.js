module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
};
