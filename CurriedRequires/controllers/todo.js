
/**
 * ToDo's-Routes Controllers.
 */
module.exports = function init(sandbox){
    return (function ToDo(sndbx){
        var globals = sndbx.globals;
        
        function privateMethod(){}
        
        function list(req, res){
            res.render('todos/list', {title: 'List ToDos'});
        }
        
        function view(req, res){
            res.render('todos/view', {title: 'ToDos'});
        }
        
        function edit(req, res){
            res.render('todos/edit', {title: 'Edit ToDo'});
        }
        
        function del(req, res){
            res.render('todos/del', {title: 'Delete ToDo'});
        }
        
        function neo(req, res){
            res.render('todos/neo', {title: 'New ToDo'});
        }
        
        return {
            list: list,
            view: view,
            edit: edit,
            del: del,
            neo: neo
        };
    })(sandbox);
};
