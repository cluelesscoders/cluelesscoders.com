module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/prop-types": 0,
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf",
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
      },
    ],
    "max-classes-per-file": ["error", 5],
    "react/jsx-props-no-spreading": "off",
  },
};
