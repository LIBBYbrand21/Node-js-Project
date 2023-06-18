const mongoose = require('mongoose');

//מתרימים

const donateSchema = mongoose.Schema({
    name: String,
    phone: String,
    target: Number,
    get: Number,
    group: Number
})

const Donate = mongoose.model('Donates', donateSchema);

module.exports = Donate;
// const saleSchema = mongoose.Schema({
//     saleDate:Date,
//     storeLocation:String
// })

// const Donate=mongoose.model('sales',saleSchema);

// module.exports=Donate;