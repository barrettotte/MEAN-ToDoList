
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var bluebird = require('bluebird');
var dbconfig = require('./config/database');


//Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api.route');

var app = express();


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Setup middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS config --> Connect back and front end applications properly
// NOTE: This must be BEFORE routes/mongodb connection
app.use(function(request, response, next){
	response.header("Access-Control-Allow-Origin", "http://localhost:4200");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});


//Give application urls for routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);


//Setup MongoDB database with Mongoose
mongoose.Promise = bluebird;
mongoose.connect(dbconfig.database)
	.then(() => {
		console.log("Successfully connected to MongoDB database at " + dbconfig.database);
	})
	.catch(() =>{
		console.log("Error connecting to MongoDB database at " + dbconfig.database);
	});



// catch 404 and forward to error handler
app.use(function(request, response, next) {
  next(createError(404));
});

// error handler
app.use(function(err, request, response, next) {
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};
  response.status(err.status || 500);
  response.render('error');
});



module.exports = app;