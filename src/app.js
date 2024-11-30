var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var routes = require('./routes/index');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', routes);


// rotası olmayan isteklere 404 hatası döndürme
app.use(function(req, res, next) {
    next(createError(404));
});

// Hata yönetimi
app.use(function(err, req, res, next) {
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

res.status(err.status || 500).json({error: err.message});
});

module.exports = app;
  
  