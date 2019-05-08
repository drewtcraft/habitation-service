// import dependencies &
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');

mongoose.connect('mongodb://localhost:27017/habitat')
	.then(db => {
		console.log('db connected')
	})
	.catch(err => console.log(err));

const port = process.env.PORT || 5000;

var whitelist = [ 'http://localhost:3000' ];
var corsOptions = {
	origin: function (origin, cb) {
		if (whitelist.includes(origin)) {
			cb(null, true);
		}
		else {
			cb(new Error('Not allowed by CORS'));
		}
	}
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
