module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    ['module-resolver', {
      root: [
        './',
      ],

      "alias": {
        "ui": "./src/components",
        "app": "./src/modules",
        "@theme": "./src/theme",
      }
    }],
  ],
};
