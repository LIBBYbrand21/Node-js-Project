const mongoose = require('mongoose');

//תרומות

const groupSchema = mongoose.Schema(
    {
        _id: Number,
        name: String,
        get: Number
    })

const Group = mongoose.model('groups', groupSchema);

module.exports = Group;