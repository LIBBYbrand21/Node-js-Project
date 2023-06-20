const mongoose = require('mongoose');

//מתרימים

const donateSchema = mongoose.Schema(
    {
        _id: Number,
        name: String,
        group: Number,
        terget: Number,
        get:Number
      }
);

const Donate = mongoose.model('donates', donateSchema);

module.exports = Donate;