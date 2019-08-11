const path = require('path')
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    components: path.resolve(__dirname, './src/components'),
    pages: path.resolve(__dirname, './src/pages'),
    utils: path.resolve(__dirname, './src/utils'),
    store: path.resolve(__dirname, './src/store'),
    api: path.resolve(__dirname, './src/api'),
<<<<<<< HEAD
    images: path.resolve(__dirname, './public/images')
=======
>>>>>>> gaoyuqing
  })
);