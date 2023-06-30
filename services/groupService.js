const groupRepo = require('../repos/groupRepo');
const campain = require('../repos/campainRepo')

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
    async updateGroup(id, groupChange) {
        let newGroup = await groupRepo.updateGroup(id, groupChange);
        if (groupChange.get) {
            let campainDetails = await campain.getAll();
            console.log(campainDetails[0].rechived);
            await campain.updateRechived( { 'rechived': (groupChange.get + (campainDetails[0].rechived)) });
            // await campain.updateRechived( { "rechived": groupChange.get });
        }
        return newGroup;
    }
}
module.exports = new GroupService();