const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Client_Details_Model, valid_Client_Details } = require('../models/client_details_Model')

require('../db/mongo_Connect');


router.post('/', async (req, res) => {
    if (mongoose.connection.readyState === 0) { res.json({ status: 0 }); }
    else {
        console.log(req.body);
        let vali_Body = valid_Client_Details(req.body);
        if (vali_Body.error) {
            return res.status(400).json(vali_Body.error.details)
        }
        req.body.email = (req.body.email).toUpperCase();
        console.log(req.body);
        let client_Details = new Client_Details_Model(req.body);
        await client_Details.save();
        res.json({ status: 1 })
    }
})

router.post('/User_Check', async (req, res) => {
    if (mongoose.connection.readyState === 0) { res.json({ status: 0 }); }
    else {
        let userData_Clint = req.body;
        console.log(userData_Clint);
        let result = await Client_Details_Model.find({ "email": userData_Clint.email })
        if (result.length === 0) { res.json({ status: 1 }); }
        else {
            userData_Db = result[0];
            userData_Clint.password === userData_Db.password ? res.json({ userData_Db, status: true }) : res.json({ status: false });
        }
    }
});

module.exports = router;
