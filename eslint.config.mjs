import globals from "globals";
import pluginJs from "@eslint/js";
import airbnb from "eslint-config-airbnb-base"

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      airbnb
    },
    rules: {
      "quotes" : [2, "double", { "avoidEscape": true }],
    }
  }
];