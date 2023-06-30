const db = require('../models/db');
const mongoose = require('mongoose');
const Donor = require('../models/donor');

class DonorRepo {
    constructor() {
        db.connect();
    }
    //get all donors, query string
    async getAll() {
        return await Donor.find({});
    }
    //get by id
    async getById(id) {
        return await Donor.findOne({ _id: id });
    }
    //get by donate
    async getByDonate(donate_id) {
        return await Donor.find({ donate: donate_id });
    }
    //add donor
    async addDonor(donor) {
       return await Donor.create(donor);
    }
}
module.exports = new DonorRepo();