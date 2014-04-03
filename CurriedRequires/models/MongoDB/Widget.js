

/**
 * Schema for a Widget entry in a Widgets collection
 */
exports.Widget = {
    sn: {type: String, require: true, trim: true, unique: true},
    name: {type: String, required: true, trim: true},
    desc: String,
    price: Number
};
