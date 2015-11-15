import webpack from 'webpack';
import path from 'path';

export default {
  devtool: '#eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '../devcards/index.js')
  ],
  output: {
    filename: 'devcards.js',
    path: '/tmp/not-used',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
    ]
  }
};
