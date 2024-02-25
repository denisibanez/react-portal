module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.test.tsx', '*.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"react", "react-hooks", "@typescript-eslint"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/display-name": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    'react/jsx-no-target-blank': 'off',
    'react/no-direct-mutation-state': 'off',
    'react/prop-types': 'off',
    'react/require-render-return': 'off',
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
