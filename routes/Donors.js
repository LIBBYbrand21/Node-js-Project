//תרומות
const express = require('express');
const donorService=require('../services/donorService');
const router = express.Router();

//get all donors, query string
router.get('/',async(req,res,next)=>{
    let allDonors=await donorService.getAll();
    console.log(allDonors.length);
    res.json(allDonors);
})
//get by id
router.get('/:id',async(req,res,next)=>{
    let DonorById=await donorService.getById(req.params.id);
    res.json(DonorById);
})
//get by donate
router.get('/donate/:donate_id',async(req,res,next)=>{
    let DonorById=await donorService.getByDonate(req.params.donate_id);
    console.log(DonorById.length);
    res.json(DonorById);
})
//add donor

module.exports=router;
