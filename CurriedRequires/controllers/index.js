
/**
 * Index-Routes Controllers.
 */
module.exports = function init(sandbox){
    return (function Index(sndbx){
        var globals = sndbx.globals;
        
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
    })(sandbox);
};

