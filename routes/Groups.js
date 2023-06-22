//קבוצות

const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
maxId=302;

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
router.post('/', async (req, res, next) => {
    if (req.body) {
        req.body._id = ++maxId;
        let newGroup = req.body;
        let createGroup = await groupService.addGroup(newGroup);
        console.log(`a new group by name ${newGroup.name} ,`);
        res.json(createGroup);
    }
})
//update group
router.put('/:id', async (req, res, next) => {
    let groupToUpdate = req.body;
    let groupUpdate = await groupService.updateGroup(req.params.id, groupToUpdate);
    console.log(groupUpdate.length);
    res.json(groupUpdate);
})
module.exports = router;
