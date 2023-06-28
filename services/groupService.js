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
    async addGroup(group) {
        return await groupRepo.addGroup(group);
    }
    //update group
    async updateGroup(id,groupChange) {
        return await groupRepo.updateGroup(id,groupChange);
    }
}
module.exports=new GroupService();