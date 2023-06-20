//קבוצות

const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();

//get all groupes
router.get('/', async (req, res, next) => {
    let allGroups = await groupService.getAll();
    console.log(allGroups.length);
    res.json(allGroups);
})
//get group by id
router.get('/:id', async (req, res, next) => {
    let groupById = await groupService.getById(req.params.id);
    res.json(groupById);
})
//add group
//update group
//delete group
module.exports = router;
