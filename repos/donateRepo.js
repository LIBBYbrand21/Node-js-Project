const db = require('../models/db');
const Donate = require('../models/donate');
//מתרימים

class DonateRepo {
    constructor() {
        db.connect();
    }
    //get all donates
    async getAll() {
        return await Donate.find({});
    }
    //get donate by id
    async getById(id) {
        return await Donate.find({ _id: id });
    }
    //get donate by group
    async getByGroup(group_id) {
        return await Donate.find({ group: group_id });
    }
    //add donate
    async addDonate(donate) {
        return await Donate.create(donate);
    }
    //update donate
    async updateDonate(id, donate) {
        return await Donate.findByIdAndUpdate(id, donate, { 'new': true });
    }
    //delete donate
    async deleteDonate(id) {
        return await Donate.deleteOne(id);
    }
}
module.exports = new DonateRepo();