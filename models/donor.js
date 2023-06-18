const mongoose = require('mongoose');

//תרומות

const donorSchema = mongoose.Schema(
    {
    name:String,
    sum:Number,
    donate:Number
    })

const Donor=mongoose.model('Donors',donorSchema);

module.exports=Donor;