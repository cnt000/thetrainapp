const express = require('express');
const apiProxy = require('express-api-proxy');

const app = express();

app.all(
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
