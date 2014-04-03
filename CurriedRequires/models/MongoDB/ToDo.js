

/**
 * Schema for a Todo entry in a Todos collection
 */
exports.ToDo = {
    title: {type: String, required: true, trim: true},
    desc: String
};
