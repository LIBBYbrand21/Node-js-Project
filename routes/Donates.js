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
router.get('/:donate_id',async(req,res,next)=>{
    let donateById=await donateService.getById(req.params.donate_id);
    console.log(donateById.length);
    res.json(donateById);
})
//get donate by group
router.get('/group/:group_id',async(req,res,next)=>{
    let donatesByGroup=await donateService.getByGroup(req.params.group_id);
    console.log(donatesByGroup.length);
    res.json(donatesByGroup);
})
//add donate
//update donate
//delete donate

module.exports=router;
