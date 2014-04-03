
/**
 * Init Routes and Controllers.
 */
module.exports = function init(sandbox){
    var app = sandbox.app
      , globals = sandbox.globals
      , index = require('../controllers/main/index.js')(sandbox.index)
      , todos = require('../controllers/main/todo.js')(sandbox.todos);
    
    app.get('/', index.main)
       .get('/index', index.main)
       .get('/todos', todos.items)
       .get('/todos/new', todos.create)             // keep literals above :params
       .get('/todos/remove', todos.remove)          // keep literals above :params
       .get('/todos/:id', todos.item)               // keep :params below literals
       .get('/todos/:id/edit', todos.edit)          // keep :params below literals
       .get('/todos/:id/remove', todos.remove);     // keep :params below literals
       
    app.post('/todos/new', todos.add)               // keep literals above :params
       .post('/todos/:id/update', todos.update)     // keep :params below literals
       .post('/todos/:id/remove', todos.del);       // keep :params below literals
    
    require('./API')(sandbox.api);
};
