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
}
module.exports=new GroupService();