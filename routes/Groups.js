//קבוצות

const express = require('express');
const groupService = require('../services/groupService');
const router = express.Router();
const Group=require('../models/group')

//לא מטופל עדיין ה ID המקסימלי
// let groupMaxId = Group.findOne().sort('_id').exec(function (err, item) {
//     item:'_id' 
// })

//get all groupes
router.get('/', async (req, res, next) => {
    try {
        let allGroups = await groupService.getAll();
        await res.status(200).json(allGroups);
    } catch (err) {
        next(err);
    }
})
//get group by id
router.get('/:id', async (req, res, next) => {
    try {
        let groupById = await groupService.getById(req.params.id);
        await res.status(200).json(groupById);
    } catch (err) {
        next(err);
    }
})
//add group
router.post('/', async (req, res, next) => {
    try {
        if (req.body) {
            // req.body._id = ++groupMaxId;
            let newGroup = req.body;
            console.log(newGroup._id);
            let createdGroup = await groupService.addGroup(newGroup);
            console.log(`a new group by name ${newGroup.name} ,`);
            await res.status(200).json(createdGroup);
        }
    } catch (err) {
        next(err);
    }
})
//update group
router.put('/:id', async (req, res, next) => {
    try {
        let groupToUpdate = req.body;
        let groupUpdate = await groupService.updateGroup(req.params.id, groupToUpdate);
        await res.status(200).json(groupUpdate);
    } catch (err) {
        next(err);
    }
})
module.exports = router;
