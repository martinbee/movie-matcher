module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true,
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "spaced-comment": 0,
    "semi": 0,
    "react/destructuring-assignment": 0,
    "no-trailing-spaces": 0,
    "react/react-in-jsx-scope": 0
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
  ],
  "parser": "babel-eslint",
};
