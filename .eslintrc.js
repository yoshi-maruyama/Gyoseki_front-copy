module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["unused-imports", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "unused-imports/no-unused-imports-ts": "warn",
  },
};
