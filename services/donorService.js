const donorRepo = require('../repos/donorRepo');

class DonorService {
    //get all donors, query string
    async getAll() {
        return await donorRepo.getAll();
    }
    //add donor
    async addDonor() {
        return await donorRepo.addDonor();
    }
    //get by id
    async getById(id) {
        return await donorRepo.getById();
    }
}
module.exports=new DonorService();