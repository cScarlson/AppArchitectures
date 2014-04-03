
/**
 * Module dependencies.
 */
var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , redis = require('redis');

var globals = require('./globals.js')
  , models = require('./models')({mongoose: mongoose, redis: redis})
  , Todo = models.Todo
  , Widget = models.Widget;

mongoose.connect('mongodb://127.0.0.1/TodoDb');
mongoose.connection.on('open', function(){
    console.log('mongoose connection successful');
});

var app = express();

var Sandbox = function(options){
    this.app = app;
    this.globals = globals;
    this.model = options.model;
    this.attr = options.attr;
    this.onUpdate = options.onUpdate;
};

var indexSandbox = new Sandbox({
    attr: true,
    onUpdate: function index(){}
});
var todosSandbox = new Sandbox({
    model: Todo,
    attr: false,
    onUpdate: function todos(){}
});
var apiSandbox = new Sandbox({
    attr: true,
    onUpdate: function api(){}
});

var sandbox = {
    app: app,
    globals: globals,
    index: indexSandbox,
    todos: todosSandbox,
    api: apiSandbox
};

app.configure(function(){
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    // passport configs go here
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

require('./routes')(sandbox);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});







