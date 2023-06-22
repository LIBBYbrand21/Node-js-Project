const campainRepo = require('../repos/campainRepo');
const CampainRepo = require('../repos/campainRepo');

class CampainService {

    //get all campain details
    async getAll() {
        return await campainRepo.getAll();
    }
    
    //change...
    async change_update(id) {
        return await campainRepo.change_update({_id:id});
    }
}

module.exports=new CampainRepo();