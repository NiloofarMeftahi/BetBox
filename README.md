# **BET BOX**
Bet box is a simple betting game. The player can choose the down arrow to bet for numbers lower than 50 or the up arrow for numbers above 50. 







![Alt Text](https://github.com/NiloofarMeftahi/BetButton/blob/595aa5ce4bbeb3aa2cfe2a1812745092eb1c76ce/readme_image/Screenshot%202024-01-04%20211141.png) ![Alt Text](https://github.com/NiloofarMeftahi/BetBox/blob/8e95c7d5a756a4c68e437fe8266121fac37d9b25/readme_image/Screenshot%202024-01-04%20213229.png) ![Alt Text](https://github.com/NiloofarMeftahi/BetBox/blob/8e95c7d5a756a4c68e437fe8266121fac37d9b25/readme_image/Screenshot%202024-01-04%20213251.png)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
