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
        return await Group.find({_id:id})
    }
    //add group
    async addGroup(group) {
        return await Group.create(group);
    }
    //update group
    async updateGroup(id,groupe) {
        return await Group.findByIdAndUpdate(id,groupe);
    }
}
module.exports = new GroupRepo();