import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintPluginReact.configs.flat.recommended,
    {
        plugins: {
            react: eslintPluginReact,
            "react-hooks": eslintPluginReactHooks,
        },
        rules: {
            "no-unused-vars": "error",
            "no-undef": "off",
            "no-console": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "react/display-name": "off",
            "@typescript-eslint/no-use-before-define": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "react/jsx-curly-brace-presence": ["error", "never"],
            "react/prop-types": "off",
            "@typescript-eslint/no-require-imports": "off",
            "react/react-in-jsx-scope": "off",
        },
    },
];
