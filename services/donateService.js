const donateRepo = require('../repos/donateRepo');


class DonateService {

    //get all donates
    async getAll() {
        return await donateRepo.getAll();
    }
    //get donate by id
    async getById(id) {
        return await donateRepo.getById(id);
    }
    //get donate by group
    async getByGroup(id) {
        return await donateRepo.getByGroup(id);
    }
    //add donate
    async addDonate(donate) {
        return await donateRepo.addDonate(donate);
        //  let group=await groupService.getById(donate.group);
        //   await groupService.updateGroup(donate.group,{get:(donate.sum+(group.get.value*1))});
        // return donate
    }
    //update donate
    async updateDonate(id, donate) {
        return await donateRepo.updateDonate(id, donate);
    }
    //delete donate
    async deleteDonate(id) {
        return await donateRepo.deleteDonate({ _id: id });
    }
}

module.exports = new DonateService();