//מתרימים

const express = require('express');
const router = express.Router();
const donateService=require('../services/donateService');


//get all donates
router.get('/',async(req,res,next)=>{
    let allDonates=await donateService.getAll();
    res.json(allDonates);
})
//get donate by id
//add donate
//update donate
//delete donate
