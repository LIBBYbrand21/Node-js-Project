const mongoose = require('mogoose');

//מתרימים

const donateSchema = mongoose.Schema({
    _id: Int32Array,
    name: String,
    phone: String,
    target: Int32Array,
    get: Int32Array,
    group: Int32Array
})

const Donate=mongoose.model('donates',donateSchema);

module.exports=Donate;