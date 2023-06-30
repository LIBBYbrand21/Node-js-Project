//תרומות

const express = require('express');
const logger = require('../middlewares/logger');
const donorService = require('../services/donorService');
const router = express.Router();
const Donor = require('../models/donor');

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
            let donorMaxId = await Donor.find().sort({ _id: -1 }).limit(1)
            //req.body._id = ++donorMaxId._id;
            let newDonor = req.body;
            let createDonor = await donorService.addDonor(newDonor);
            console.log(`a new donation by ${createDonor.name}, sum of donation: ${createDonor.sum},`);
            await res.status(200).json(createDonor);
        }
    } catch (err) {
        next(err);
        //res.status(500).json('Something break!  We will contact you later.')
    }
})
module.exports = router;
