
/**
 * Init Routes and Controllers.
 */
module.exports = function init(sandbox){
    var app = sandbox.app
      , globals = sandbox.globals
      , index = require('../controllers/main/index.js')(sandbox)
      , todos = require('../controllers/main/todo.js')(sandbox);
    
    app //init routes
        .get('/', index.main)
        .get('/index', index.main)
        .get('/todos', todos.list);
    
    require('./API')(sandbox);
};
