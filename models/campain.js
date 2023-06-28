const mongoose = require('mongoose');

//פרטי המצ'ינג

const campainSchema = mongoose.Schema(
  {
    _id:Number,
    name: String,
    recived: Number,
    target: Number,
    endDate: Date,
    startDate: Date,
    password:String
  }
);

const Campain = mongoose.model('campains', campainSchema);

module.exports = Campain;