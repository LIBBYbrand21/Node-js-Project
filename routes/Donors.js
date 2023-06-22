//תרומות
const express = require('express');
const logger = require('../middlewares/logger');
const donorService = require('../services/donorService');
const router = express.Router();
const Donor = require('../models/donor');

//let donorMaxId=110;
// let donorMaxId = Donor.findOne().sort('_id').exec(function (err, item) {
//     item:'_id' //is the max value
// })
//get all donors, query string
router.get('/', async (req, res, next) => {
    try{
        let allDonors = await donorService.getAll();
        await res.status(200).json(allDonors);
       // res.json(allDonors);
    }catch (err) {
        next(err);
    }

})
//get by id
router.get('/:id', async (req, res, next) => {
    let DonorById = await donorService.getById(req.params.id);
    res.json(DonorById);
})
//get donors by donate
router.get('/donate/:donate_id', async (req, res, next) => {
    let DonorById = await donorService.getByDonate(req.params.donate_id);
    res.json(DonorById);
})
//add donor
router.post('/', async (req, res, next) => {
    if (req.body) {
        req.body._id = donorMaxId * 1;
        let newDonor = req.body;
        let createDonor = await donorService.addDonor(newDonor);
        console.log(`a new donation by ${newDonate.name}, sum of donation: ${newDonate.sum},`);
        res.json(createDonor);
    }
})
module.exports = router;
