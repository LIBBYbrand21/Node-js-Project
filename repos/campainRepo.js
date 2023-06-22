const db = require('../models/db');
const Campain = require('../models/campain');
//מתרימים

class CampainRepo {
    constructor() {
        db.connect();
    }
    //get all parameters of campain
    async getAll() {
        return await Campain.find({});
    }
    //change ...
    async change_update(id) {
    }
    
}
module.exports = new CampainRepo();