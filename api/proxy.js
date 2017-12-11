const express = require('express')
const apiProxy = require('express-api-proxy')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  next()
})

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
)
const port = process.env.PORT || 3000

app.listen(port, () => console.log('API proxy istening on port 3000!'))
