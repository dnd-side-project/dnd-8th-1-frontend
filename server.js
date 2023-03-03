/* eslint-disable @typescript-eslint/no-var-requires */
// server.js

const http = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({
  dev,
  hostname,
  port,
})

const handle = app.getRequestHandler()

const PORT = 3000

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    .listen(PORT, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${PORT}`)
    })

  // The certificate is at "./localhost.pem" and the key at "./localhost-key.pem"
  const https = require('https')
  const fs = require('fs')
  const options = {
    key: fs.readFileSync('./localhost-key.pem'),
    cert: fs.readFileSync('./localhost.pem'),
  }

  https
    .createServer(options, function (req, res) {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })
    .listen(PORT + 1, (err) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on https://localhost:${PORT + 1}`)
    })
})
