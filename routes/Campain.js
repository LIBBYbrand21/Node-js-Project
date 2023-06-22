// const express = require('express');
// const logger = require('../middlewares/logger');
// const campainService = require('../services/cam');
// const router = express.Router();

// //פרטי מצ'ינג

// //get all donors, query string
// router.get('/', async (req, res, next) => {
//     try{
//         let allDonors = await donorService.getAll();
//         await res.status(200).json(allDonors);
//         console.log(allDonors.length);
//        // res.json(allDonors);
//     }catch (err) {
//         next(err);
//     }

// })
// //get by id
// router.get('/:id', async (req, res, next) => {
//     let DonorById = await donorService.getById(req.params.id);
//     res.json(DonorById);
// })

// module.exports = router;
