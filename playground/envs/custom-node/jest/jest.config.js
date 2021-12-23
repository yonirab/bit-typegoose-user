// Override the Jest config to ignore transpiling from specific folders
// See the base Jest config: https://bit.dev/teambit/react/react/~code/jest/jest.config.js

const reactJestConfig = require('@teambit/react/jest/jest.config');
// uncomment the line below and install the package if you want to use this function
// const {
//   generateNodeModulesPattern,
// } = require('@teambit/dependencies.modules.packages-excluder');
// const packagesToExclude = ['@my-org', 'my-package-name'];

module.exports = {
  ...reactJestConfig,
  testEnvironment: require.resolve('jest-environment-node'),
};
