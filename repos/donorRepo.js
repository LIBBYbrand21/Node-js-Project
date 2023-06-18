const mogoose = require('mogoose');
const Donor = require('../models/donor');

class DonorRepo {
    constructor() {
        db.connect();
    }
    //get all donors, query string
    async getAll() {
        return await Donor.find({});
    }
    //add donor
    async addDonor() {

    }
    //get by id
    async getById(id) {

    }
}
module.exports = new DonorRepo();