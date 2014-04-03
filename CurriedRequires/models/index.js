
/**
 * Instantiates models and returns a full-sandbox for app
 */
module.exports = (function(modules){
    return function protagonize(sandbox){
        console.log('@ToDo', modules.Todo);
        var mongoose = sandbox.mongoose
          , Schema = mongoose.Schema
          , ObjectId = Schema.ObjectId
          , redis = sandbox.redis
          , Todo = new Schema(modules.Todo)
          , Widget = new Schema(modules.Widget);
        
        return {
            ObjectId: ObjectId,
            Todo: mongoose.model('ToDo', Todo),
            Widget: mongoose.model('Widget', Widget)
        };
    };
})({
    Todo: require('./MongoDB/ToDo.js').ToDo,
    Widget: require('./MongoDB/Widget.js').Widget
});

