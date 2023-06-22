//תרומות
const express = require('express');
const logger = require('../middlewares/logger');
const donorService = require('../services/donorService');
const router = express.Router();
const Donor = require('../models/donor');

//let donorMaxId=110;
let donorMaxId= Donor.findOne().sort('_id').exec(function(err, item) {
    item.select('_id') //is the max value
})
//get all donors, query string
router.get('/', async (req, res, next) => {
    let allDonors = await donorService.getAll();
    console.log(allDonors.length);
    res.json(allDonors);
})
//get by id
router.get('/:id', async (req, res, next) => {
    let DonorById = await donorService.getById(req.params.id);
    res.json(DonorById);
})
//get donors by donate
router.get('/donate/:donate_id', async (req, res, next) => {
    let DonorById = await donorService.getByDonate(req.params.donate_id);
    console.log(DonorById.length);
    res.json(DonorById);
})
//add donor
router.post('/createDonor', async (req, res, next) => {
    if (req.body) {
       req.body._id=donorMaxId*1;
        let newDonor = req.body;
        let createDonor = await donorService.addDonor(newDonor);
        logger(`a new donor by ${newDonor.name} sum of donor ${newDonor.sum},`);
        res.json(createDonor);
    }
})
module.exports = router;
