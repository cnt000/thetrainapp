const express = require('express');
const apiProxy = require('express-api-proxy');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.get(
  '/proxy',
  apiProxy({
    ensureAuthenticated: false,
    endpoints: [
      {
        pattern: /\wat/,
        maxCacheAge: 60 * 10
      }
    ]
  })
);

app.listen(3000, () => console.log('API proxy istening on port 3000!'));
