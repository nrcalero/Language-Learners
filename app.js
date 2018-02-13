
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var interests = require('./routes/interests');
var storyboards = require('./routes/storyboards');
var words = require('./routes/words');
var difficulty = require('./routes/difficulty');
var login = require('./routes/login');
var interestsdata = require('./routes/interestsdata');
var changeinterest = require('./routes/changeinterest');
var changedifficulty = require('./routes/changedifficulty');
var register = require('./routes/register');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if (app.get('env') == 'development') {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/interests', interests.view);
app.get('/storyboards', storyboards.view);
app.get('/words', words.view);
app.get('/difficulty', difficulty.view);
app.get('/login', login.view);
app.get('/register', register.view);
app.get('/interestsdata', interestsdata.view);
app.get('/index', index.view);
app.get('/changeinterest', changeinterest.changeInterests);
app.get('/changedifficulty', changedifficulty.changeDifficulty);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get(process.env.PORT || 3000), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
