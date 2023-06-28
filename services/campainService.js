const campainRepo = require('../repos/campainRepo');

class CampainService {

    //get all campain details
    async getAll() {
        return await campainRepo.getAll();
    }
    
    //change...
    async change_update(myChange) {
        return await campainRepo.change_update(myChange);
    }
}

module.exports=new CampainService();