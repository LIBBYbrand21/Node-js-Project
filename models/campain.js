const mongoose = require('mongoose');

//מתרימים

const campainSchema = mongoose.Schema(
    {
        // _id: Number,
        // name: String,
        // group: Number,
        // terget: Number,
        // get:Number
      }
);

const Campain = mongoose.model('campain', campainSchema);

module.exports = Campain;