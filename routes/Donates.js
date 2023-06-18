//מתרימים

const express = require('express');
const donateService=require('../services/donateService');
const router = express.Router();


//get all donates
router.get('/',async(req,res,next)=>{
    let allDonates=await donateService.getAll();
    console.log(allDonates.length);
    res.json(allDonates);
})
//get donate by id
//add donate
//update donate
//delete donate

module.exports=router;
