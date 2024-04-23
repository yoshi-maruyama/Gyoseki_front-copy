module.exports = {
  root: true,
  extends: [
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: [".eslintrc.js", "jest.config.js"],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["unused-imports", "import"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "unused-imports/no-unused-imports-ts": "warn",
  },
};
