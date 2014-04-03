
/**
 * ToDo's-Routes callback.
 */
module.exports = (function ToDo(){
    return function init(sandbox){
        var globals = sandbox.globals
          , Todo = sandbox.model;
        
        function privateMethod(){}
        
        function items(req, res){
            Todo.find({}, function(err, docs){
                res.render('todos/items', {title: 'List ToDos', items: docs}); 
            });
        }
        
        function item(req, res){
            Todo.findOne({_id: req.params.id}, function(err, doc){
                res.render('todos/item', {title: 'ToDos', item: doc});
            });
        }
        
        function edit(req, res){
            Todo.findOne({_id: req.params.id}, function(err, doc){
                if(!err){
                    res.render('todos/edit', {title: 'Edit ToDo', item: doc});
                }else{
                    res.send('error editing task');
                }
            });
            
        }
        
        function create(req, res){
            res.render('todos/create', {title: 'New ToDo'});
        }
        
        function remove(req, res){
            Todo.findOne({_id: req.params.id}, function(err, doc){
                if(!err){
                    res.render('todos/remove', {title: 'Delete ToDo', item: doc});
                }else{
                    console.log('@Todo #remove', err);
                    res.send('Error: Item not found');
                }
            });
        }
        
        function del(req, res){
            Todo.remove({_id: req.params.id}, function(err, doc){
                if(!err){
                    res.redirect('/todos');
                }else{
                    console.log('@Todo #delete', err);
                    res.send('Error: Could not delete item');
                }
            });
        }
        
        function addItem(req, res){
            var todo = new Todo({title: req.body.title, desc: req.body.desc});
            todo.save(function(err){
                if(!err){
                    res.redirect('/todos');
                }else{
                    console.log('error creating todo item:', err);
                    res.send('error creating todo item: ' + err);
                }
            });
        }
        
        function update(req, res){
            Todo.update({_id: req.params.id}, {title: req.body.title, desc: req.body.desc}, function(err, doc){
                if(!err){
                    res.redirect('/todos');
                }else{
                    console.log('error creating todo item:', err);
                    res.send('error creating todo item: ' + err);
                }
            });
        }
        
        return {
            items: items,
            item: item,
            edit: edit,
            create: create,
            remove: remove,
            del: del,
            add: addItem,
            update: update
        };
    };
})();
    
    
    
    
