const mogoose = require('mogoose');
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
        return await Donate.find({});
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