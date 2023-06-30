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
            //כאן צריך לעדכן סכום שהגיעו בסך הכללי של ה campain...
            // let campainDetails = await campain.group.getAll();
            // await campain.updateRechived( { rechived: (groupChange.get + (campainDetails[0].rechived.value * 1)) });
        }
        return newGroup;
    }
}
module.exports = new GroupService();