
/**
 * Index-Routes callbacks.
 */
module.exports = (function(schema){
    var fn = function f(sandbox){
        return f
    };
    
    function privateMethod(){}

    schema.prototype = {
        main: function main(req, res){
            res.render('index/index', {title: 'Index Main'});
        },
        weather: function weather(req, res){
            res.render('index/weather', {title: 'Weather Partial'});
        },
        breakingNews: function breakingNews(req, res){
            res.render('index/breakingNews', {title: 'Breaking News'});
        }
    };

    fn.__proto__ = Object.getPrototypeOf(new schema());

    return fn;
})(function(){});

//WE COULD USE THE Omnifarious Pattern above OR WE COULD USE A Protagonist to pass 'sandbox'

/*
module.exports = (function Index(){
    return function init(sandbox){
        var globals = sandbox.globals;
        
        function privateMethod(){}
        
        function main(req, res){
            res.render('index/index', {title: 'Index Main'});
        }
        
        function weather(req, res){
            res.render('index/weather', {title: 'Weather Partial'});
        }
        
        function breakingNews(req, res){
            res.render('index/breakingNews', {title: 'Breaking News'});
        }
        
        return {
            main: main,
            weather: weather,
            news: breakingNews
        };
    };
})();

*/

