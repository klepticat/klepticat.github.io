const http = require('http')
const express = require('express')
const path = require('path')

const app = express();
const server = new http.createServer(app)

const PORT = 9378 || process.env.PORT

function log(msg) {
    console.log(`[${new Date().toLocaleTimeString()}] ${msg}`)
}

app.use(express.static(path.join(__dirname, 'static')))

server.listen(PORT, () => log(`Server listening on ${PORT}`))