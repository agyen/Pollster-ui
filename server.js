const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mail = require('./mailgun')

const app = express();

app.use(express.static(__dirname + '/dist/poll-ui'));

app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname + '/dist/poll-ui/index.html'));
});

app.post('/sendmail', function(req, res) {
	console.log('sending mail...');
	const user = req.body;
	mail(user);
});

app.listen(process.env.PORT || 8080, () => {
	console.log('Server started...');
});

