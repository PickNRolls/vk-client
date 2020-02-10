const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {},
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'],
    enforceExtension: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader',
         ],
       },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
  }
};