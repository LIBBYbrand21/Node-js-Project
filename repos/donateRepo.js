const db=require('../models/db');
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
    //get donate by 
    async getById(id) {
        return await Donate.find({_id:id});
    }
    //get donate by group
    async getByGroup(group_id) {
        return await Donate.find({group:group_id});
    }
    //add donate
    async addDonate() {

    }
    //update donate
    async updateDonate() {

    }
    //delete donate
    async deleteDonate() {

    }
}
module.exports = new DonateRepo();