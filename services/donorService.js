const donorRepo = require('../repos/donorRepo');
const donateService = require('../services/donateService');
const groupService = require('../services/groupService');
const campain = require('../repos/campainRepo')


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
        let newDonor = await donorRepo.addDonor(donor);
        let mydonate = await donateService.getById(donor.donate);
        // console.log(mydonate[0].get);
        await donateService.updateDonate(donor.donate, { 'get': (donor.sum + (mydonate[0].get)) });
        let mygroup = await groupService.getById(mydonate[0].group);
        // console.log(mygroup);
        await groupService.updateGroup(mydonate[0].group, { 'get': (donor.sum + (mygroup[0].get)) });
        let campainDetails = await campain.getAll();
        // console.log(campainDetails[0].rechived);
        await campain.updateRechived( { 'rechived': (donor.sum + (campainDetails[0].rechived)) });

        return newDonor;
    }
}
module.exports = new DonorService();