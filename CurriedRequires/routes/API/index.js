
/**
 * Init API-Routes and API-Controllers.
 */
module.exports = function init(sandbox){
    var app = sandbox.app
      , globals = sandbox.globals
      , search = require('../../controllers/API/search.js')(sandbox);
      
    app // init API endpoints
        .get('/api/*', search.locations);
};

