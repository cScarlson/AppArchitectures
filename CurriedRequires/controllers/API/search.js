
/**
 * API-Routes Controllers.
 */
module.exports = function init(sandbox){
    return (function(sndbx){
        var app = sndbx.app
          , globals = sndbx.globals;
        
        function storeLocations(req, res){
            res.render('index/index', {title: 'Search Results'});
        }
        
        return {
            locations: storeLocations
        };
    })(sandbox);
};

