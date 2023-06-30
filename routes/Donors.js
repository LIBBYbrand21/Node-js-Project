//תרומות

const express = require('express');
const logger = require('../middlewares/logger');
const donorService = require('../services/donorService');
const router = express.Router();
const Donor = require('../models/donor');

//לא מטופל עדיין ה ID המקסימלי
// let donorMaxId = Donor.findOne().sort('_id').exec(function (err, item) {
//     item:'_id' 
// })


//get all donors, query string
router.get('/', async (req, res, next) => {
    try {
        let allDonors = await donorService.getAll();
        await res.status(200).json(allDonors);
    } catch (err) {
        next(err);
    }
})
//get by id
router.get('/:id', async (req, res, next) => {
    try {
        let DonorById = await donorService.getById(req.params.id);
        await res.status(200).json(DonorById);
    } catch (err) {
        next(err);
    }
})
//get donors by donate id
router.get('/donate/:donate_id', async (req, res, next) => {
    try {
        let DonorByDonate = await donorService.getByDonate(req.params.donate_id);
        await res.status(200).json(DonorByDonate);
    }
    catch (err) {
        next(err);
    }
})
//add donor
router.post('/', async (req, res, next) => {
    try {
        if (req.body) {
          //  req.body._id=++donorMaxId;
            let newDonor = req.body;
            let createDonor = await donorService.addDonor(newDonor);
            console.log(`a new donation by ${newDnor.name}, sum of donation: ${newDonor.sum},`);
            await res.status(200).json(createDonor);
        }
    } catch (err) {
        next(err);
        //res.status(500).json('Something break!  We will contact you later.')
    }
})
module.exports = router;
