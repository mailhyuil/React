/**
* express generator ES6+ template
* @edit : callor@callor.com
* @since : 2020-12-10
* @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from "mongoose";

const dbConn = mongoose.connection;
dbConn.on("connecting", () => {
  console.log("connection");
})
dbConn.on("connected", () => {
  console.log('Connected OK!!')
})
dbConn.on("open", () => {
  console.log("mongoDB open ok")
})
dbConn.on("error", (err) => {
  console.log(err)
})
mongoose.connect(mongoURL);
//! import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import foodAPI from "./routes/foodAPI.js"
import test from "./routes/test.js"
const app = express();

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set('views', path.join('./views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ./client/build 디렉토리 안의 index.html을 열어라
app.use(express.static(path.join('./client/build')));

//! app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/food', foodAPI);
app.use('/test', test);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
