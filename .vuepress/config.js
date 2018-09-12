/**
 * 说明 ——
 * theme 中的文件来源于默认样式 eject 出来的结果
 */
const { resolve } = require('path')

const webpackConfigs = {
  chainWebpack (config) {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader')
      .end()
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@component': resolve(__dirname, 'src/components/')
      }
    }
  }
}

module.exports = {
  ...webpackConfigs,

  base: '/',
  dest: 'docs',
  title: 'WebGL Reading',
  description: '《WebGL 编程指南》读书笔记',
  serviceWorker: true,
  themeConfig: {
    repo: 'AngusFu/webgl-guide-reading',
    editLinks: true,
    docsDir: 'src',

    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    nav: [
      {
        text: '阅读',
        link: '/content/',
      }
    ]
  }
}
