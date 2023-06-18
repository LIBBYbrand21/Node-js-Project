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
//add donor
//get by id

module.exports=router;
