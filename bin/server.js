const http = require('http');
const normalizePort = require('normalize-port');
const app = require('../app');

const port = normalizePort(process.env.PORT || '3000');
const host = "127.0.0.1";

app.set('port', port);

app.get('/', (req, res) => {
    res.json({server : "Server on-line"});
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server lintening http://${host}:${port}/`);
});