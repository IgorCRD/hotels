const path = require('path');
const Express = require('express');
const cors = require('cors');
const servingConfig = require('./serving-config');

const app = new Express();
const port = process.env.PORT || 8080;

const distDir = path.join(__dirname, 'dist');

app.get('*.js', (req, res, next) => {
  if (
    req.get('Accept-Encoding').indexOf('gzip') !== -1 &&
    req.get('User-Agent').indexOf('Firefox/') === -1
  ) {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  next();
});

app.use(cors(servingConfig.corsOptions));

app.use(Express.static(distDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening on port %s, Ctrl+C to stop', port);
});
