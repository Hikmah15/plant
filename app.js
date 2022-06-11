const express = require('express');
const path = require('path');
const logger = require('morgan');
const http = require('http');
const app = express();
const cors = require('cors');
const porthttp = process.env.PORT_HTTP || 5000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


app.use('/', indexRouter);
app.use('/users', usersRouter);


const httpServer = http.createServer(app);

httpServer.listen(porthttp, () => {
    console.log(`Server berjalan pada host ${hostname} dan port ${porthttp}`);
});
