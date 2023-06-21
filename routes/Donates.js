//מתרימים

const express = require('express');
const donateService = require('../services/donateService');
const router = express.Router();
let maxId = 222;

//get all donates
router.get('/', async (req, res, next) => {
    let allDonates = await donateService.getAll();
    console.log(allDonates.length);
    res.json(allDonates);
})
//get donate by id
router.get('/:donate_id', async (req, res, next) => {
    let donateById = await donateService.getById(req.params.donate_id);
    console.log(donateById.length);
    res.json(donateById);
})
//get donate by group
router.get('/group/:group_id', async (req, res, next) => {
    let donatesByGroup = await donateService.getByGroup(req.params.group_id);
    console.log(donatesByGroup.length);
    res.json(donatesByGroup);
})
//add donate
router.post('/createDonate', async (req, res, next) => {
    if (req.body) {
        req.body._id = ++maxId;
        let newDonate = req.body;
        let createDonate = await donateService.addDonate(newDonate);
        console.log(`a new donor by ${newDonate.name} sum of donor ${newDonate.sum},`);
        res.json(createDonate);
    }
})
//update donate
router.put('/:id', async (req, res, next) => {
    let donateToUpdate = req.body;
    let donateUpdate = await donateService.updateDonate(req.params.id, donateToUpdate);
    console.log(donateUpdate.length);
    res.json(donateUpdate);
})
//delete donate
router.delete('/:id', async (req, res, next) => {
    let deleteDonate = await donateService.deleteDonate(req.params.id);
    console.log(`deleted ${deleteDonate.name} donate,`);
    res.json(deleteDonate);
})

module.exports = router;
