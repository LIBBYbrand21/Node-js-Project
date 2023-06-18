const mongoose = require('mogoose');

//תרומות

const donorSchema = mongoose.Schema(
    {
     _id:Int32Array,
    name:String,
    sum:Int32Array,
    donate:Int32Array
    })

const Donor=mongoose.model('donors',donorSchema);

module.exports=Donor;