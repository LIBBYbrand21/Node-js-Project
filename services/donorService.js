const donorRepo = require('../repos/donorRepo');
const donateService = require('../services/donateService');

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
         await donorRepo.addDonor(donor);
         //כאן צריך לעדכן גם סכום שמתרים התרים ולא הצלחתי לגשת למשתנה get שלו כדי להוסיף עליו ולא להחליף לגמרי
        //  let donate=await donateService.getById(donor.donate);
        //   await donateService.updateDonate(donor.donate,{get:(donor.sum+(donate.get.value*1))});
         return donor;
    }
}
module.exports=new DonorService();