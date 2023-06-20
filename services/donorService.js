const donorRepo = require('../repos/donorRepo');

class DonorService {
    //get all donors, query string
    async getAll() {
        return await donorRepo.getAll();
    }
     //get by id
     async getById(id) {
        return await donorRepo.getById(id);
    }
     //get by donate
     async getByDonate(id) {
        return await donorRepo.getByDonate(id);
    }
    //add donor
    async addDonor(donor) {
        return await donorRepo.addDonor(donor);
    }
}
module.exports=new DonorService();