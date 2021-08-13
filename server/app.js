var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
var Router = require('./routes/photo');
var BodyParser = require('body-parser');
const dotenv = require('dotenv');
require('dotenv/config');
var app = express();



app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

dotenv.config();
function generateAccessToken(username) {
  return jwt.sign(username, token.env.TOKEN_SECRET, {
    expiresIn: '1800s'
  });
}

// var mongoDb = 'mongodb+srv://Shani:shani8296@cluster0.2wayq.mongodb.net/Photography?retryWrites=true&w=majority';
var mongoDb = 'mongodb://localhost:27017/Photography';

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(`error connecting ${err}`);
  })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  credentials: true,
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/photo', Router);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
