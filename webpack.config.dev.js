var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      path.join(__dirname, 'app/main.js')
    ],
    output: {
        path: path.join(__dirname, '/build/'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
    loaders: [{
      test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loaders: ['react-hot', 'babel'], // 加载模块 "babel" 是 "babel-loader" 的缩写
      exclude: /node_modules/
    },
    {
      test: /\.css$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
      loader: 'style!css' // 加载模块 "babel" 是 "babel-loader" 的缩写
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),//允许错误不打断程序
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BROWSER': true,
        'S': JSON.stringify('1.2.3')
      }
    })
  ]
};
