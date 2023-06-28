const express = require('express');
const logger = require('../middlewares/logger');
const campainService = require('../services/campainService');
const router = express.Router();

//פרטי מצ'ינג

// get all details of the campain
router.get('/', async (req, res, next) => {
    try {
        let details = await campainService.getAll();
        await res.status(200).json(details);
        console.log(details.length);
    } catch (err) {
        next(err);
    }
})

//update campain details
router.put('/', async (req, res, next) => {
    try {
        if (req.body) {
            let myChange = req.body;
            let campainUpdate = await campainService.change_update(myChange);
            console.log('the campain is update!');
            await res.status(200).json(campainUpdate);
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;
