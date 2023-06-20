//תרומות
const express = require('express');
const donorService = require('../services/donorService');
const router = express.Router();

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
//get by donate
router.get('/donate/:donate_id', async (req, res, next) => {
    let DonorById = await donorService.getByDonate(req.params.donate_id);
    console.log(DonorById.length);
    res.json(DonorById);
})
//add donor

router.post('/createDonor', async(req, res,next) => {
    let newDonor = req.body;
    let createDonor=await donorService.addDonor(newDonor);
    console.log(`a new donor by ${newDonor.name} sum of donor ${newDonor.sum},`);
    res.json(createDonor,"\n",newDonor);
})
module.exports = router;
