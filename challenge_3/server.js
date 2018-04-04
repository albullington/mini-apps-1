var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hello, server is getting and sending');
});

app.post('/', function(req, res) {
	res.send('post is received');
});

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
