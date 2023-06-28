const db = require('../models/db');
const Campain = require('../models/campain');
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
        let campainById = await Campain.find({ _id: id });
        // if (campainById.password == myChange.password) {
        if ("Campain-2023" == myChange.password) {
            await Campain.findByIdAndUpdate(id, myChange);
            return await Campain.find({ _id: id });
        } else {
            return "you are not allowed to update the campain";
            // throw new Error("you are not allowed to update the campain");
        }
    }

}
module.exports = new CampainRepo();