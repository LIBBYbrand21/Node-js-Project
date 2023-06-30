const db = require('../models/db');
const Campain = require('../models/campain');
const mongoose = require('mongoose');

//מתרימים

class CampainRepo {
    constructor() {
        db.connect();
    }
    //get all details of campain
    async getAll() {
        return await Campain.find({});
    }
    //change ...
    async change_update(myChange) {
        let id = 0;
        let campainByPassword = await Campain.find({ password: myChange.password });
        if ((campainByPassword.length) == 1) {
            // if ("Campain-2023" == myChange.password) {
           return await Campain.findByIdAndUpdate(id, myChange,{'new':true});
        } else {
            return "you are not allowed to update the campain";
            // throw new Error("you are not allowed to update the campain");
        }
    }

    async updateRechived(sum) {
        let id = 0
        return await Campain.findByIdAndUpdate(id, sum,{'new':true});
    }

}
module.exports = new CampainRepo();