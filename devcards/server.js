/* eslint no-console: 0 */

import http from 'http';

import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from '../webpack/devcards.config';

const app = express();

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

const jsPath = config.output.publicPath + config.output.filename;

app.get('*', (req, res) => {
  res.end(`
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Devcards</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
  </head>
  <body>
    <script src="${jsPath}"></script>
  </body>
</html>
  `);
});

const server = http.createServer(app);
server.listen(1666, 'localhost', (err) => {
  if (err) throw err;

  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
