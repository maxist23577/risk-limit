module.exports = {
    configureWebpack: {
      resolve: {
        fallback: {
          https: require.resolve('https-browserify')
        }
      }
    },
    devServer: {
        port: 3000 // изменить порт для локального сервера на 3000
      },
    productionSourceMap: false // выключить генерацию sourcemaps в production сборке
  }

