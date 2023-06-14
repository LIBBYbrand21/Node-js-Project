const groupRepo = require('../repos/groupRepo');

class GroupService {
    //get all groupes
    async getAll() {
        return await groupRepo.getAll();
    }
    //get group by id
    async getById(id) {
        return await groupRepo.getById(id);
    }
    //add group
    async addGroup() {
        return await groupRepo.addGroup();
    }
    //update group
    async updateGroup() {
        return await groupRepo.updateGroup();
    }
    //delete group
    async deleteGroup() {
        return await groupRepo.deleteGroup();
    }
}
module.exports=new GroupService();