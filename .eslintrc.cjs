module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  parser: "@babel/eslint-parser",
  env: {
    node: true,
    es2020: true,
    mocha: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
};
