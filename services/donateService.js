const donateRepo = require('../repos/donateRepo');
const groupRepo = require('../repos/groupRepo');


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
    }
    //update donate
    async updateDonate(id,donate) {
        let newDonate= await donateRepo.updateDonate(id,donate);
        return newDonate;
    }
    //delete donate
    async deleteDonate(id) {
        return await donateRepo.deleteDonate({_id:id});
    }
}

module.exports=new DonateService();