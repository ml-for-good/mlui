module.exports = {
  extends: ["plugin:sonarjs/recommended", "next/core-web-vitals", "prettier"],
  plugins: ["sonarjs", "@emotion"],
  rules: {
    "@emotion/jsx-import": "error",
  },
}
