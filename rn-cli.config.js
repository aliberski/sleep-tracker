module.exports = {
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  },
  getBlacklistRE() {
    return metroBundler.createBlacklist([
      /test\/.*/,
      /detox\/node_modules\/.*/,
    ]);
  },
};
