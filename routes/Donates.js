//מתרימים

const express = require('express');
const donateService = require('../services/donateService');
const router = express.Router();
const Donate=require('../models/donate')

//get all donates
router.get('/', async (req, res, next) => {
    try {
        let allDonates = await donateService.getAll();
        await res.status(200).json(allDonates);
    }
    catch (err) {
        next(err);
    }
})
//get donate by id
router.get('/:donate_id', async (req, res, next) => {
    try {
        let donateById = await donateService.getById(req.params.donate_id);
        await res.status(200).json(donateById);
    } catch (err) {
        next(err)
    }
})
//get donate by group id
router.get('/group/:group_id', async (req, res, next) => {
    try {
        let donatesByGroup = await donateService.getByGroup(req.params.group_id);
        await res.status(200).json(donatesByGroup);
    } catch (err) {
        next(err);
    }
})
//add donate
router.post('/', async (req, res, next) => {
    try {
        if (req.body) {
            let donateMaxId = await Donate.find().sort({ _id: -1 }).limit(1)
            // req.body._id = ++donateMaxId;
            let newDonate = req.body;
            let createDonate = await donateService.addDonate(newDonate);
            await res.status(200).json(createDonate);
        }
    } catch (err) {
        next(err);
    }
})
//update donate
router.put('/:id', async (req, res, next) => {
    try {
        if (req.body) {
            let donateToUpdate = req.body;
            let donateUpdate = await donateService.updateDonate(req.params.id, donateToUpdate);
            await res.status(200).json(donateUpdate);
        }
    } catch (err) {
        next(err);
    }
})
//delete donate
router.delete('/:id', async (req, res, next) => {
    try {
        let deleteDonate = await donateService.deleteDonate(req.params.id);
        console.log(`deleted ${deleteDonate.name} donate,`);
        await res.status(200).json(deleteDonate);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
