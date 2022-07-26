const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Product_Details_Model, valid_Product_Details } = require('../models/product_details_Model');

router.post('/', async (req, res) => {
    if (mongoose.connection.readyState === 0) { res.json({ status: 0 }); }
    else {
        console.log(req.body);
        let req_Body = req.body;
        (req_Body.new_Cart).map((product) => {
            let new_Product = { ...product.material, name: product.title.name, img: product.img, id: product.id, price: product.price, qty: product.qty, invoice_Number: req_Body.invoice_Number, client_Id: req_Body.client_Id };
            console.log(new_Product);
            let vali_Body = valid_Product_Details(new_Product);
            if (vali_Body.error) {
                res.json(false);
                return res.status(400).json(vali_Body.error.details)
            }
            let product_Details = new Product_Details_Model(new_Product);
            product_Details.save();
        })
        res.json({ status: true });
    }
});
module.exports = router;
