const mongoose = require('mongoose');

//תרומות

const donorSchema = mongoose.Schema(
    {
     _id:Number,
    name:String,
    sum:Number,
    donate:Number
    })

const Donor=mongoose.model('donors',donorSchema);

module.exports=Donor;