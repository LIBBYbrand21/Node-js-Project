const db=require('../models/db');
const mongoose = require('mongoose');
const Group = require('../models/group');

class GroupRepo {
    constructor() {
        db.connect();
    }
    //get all groupes
    async getAll() {
        return await Group.find({})
    }
    //get group by id
    async getById(id) {

    }
    //add group
    async addGroup() {

    }
    //update group
    async updateGroup() {

    }
    //delete group
    async deleteGroup() {

    }
}
module.exports = new GroupRepo();