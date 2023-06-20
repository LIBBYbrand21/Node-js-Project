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
    async addDonate() {
        return await donateRepo.addDonate();
    }
    //update donate
    async updateDonate() {
        return await donateRepo.updateDonate();
    }
    //delete donate
    async deleteDonate() {
        return await donateRepo.deleteDonate();
    }
}

module.exports=new DonateService();