var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
 
var pollsApi = require('./server/routes/pollsApi');
 
var app = express();
 
// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 
// Set Static folder
app.use(express.static(path.join(__dirname, 'dist')));
 
app.use('/api', pollsApi);
app.get('*', (req, res)=> {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})
 
const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));