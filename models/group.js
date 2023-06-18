const mongoose = require('mogoose');

//תרומות

const groupSchema = mongoose.Schema(
    {
        _id: Int32Array,
        name: String,
        get: Int32Array,
    })

const Group = mongoose.model('groups', groupSchema);

module.exports = Group;