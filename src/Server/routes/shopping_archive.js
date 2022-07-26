const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Order_Details_Model, valid_Order_Details } = require('../models/order_details_Model');
const { Product_Details_Model } = require('../models/product_details_Model');

router.post('/', async (req, res) => {
    if (mongoose.connection.readyState === 0) { res.json({ status: 0 }); }
    else {
        console.log(req.body);
        let vali_Body = valid_Order_Details(req.body);
        if (vali_Body.error) {
            res.json(false);
            return res.status(400).json(vali_Body.error.details)
        }
        let order_Details = new Order_Details_Model(req.body);
        await order_Details.save();
        res.json(true);
    }
});
router.post('/Get_Shopping_Archive', async (req, res) => {
    if (mongoose.connection.readyState === 0) { res.json({ status: 0 }); }
    else {
        let order_Details_Model = await Order_Details_Model.find({ "client_Id": req.body.client_Id });
        if (order_Details_Model.length === 0) { res.json({ status: 1 }); }
        else {
            (async () => {
                let arr_product_Details = [];
                let count = 1;
                let get_product_Details = async (invoice_Number, purchase_Time) => {
                    let product_Details_Model = await Product_Details_Model.find({ "invoice_Number": invoice_Number });
                    count++;
                    product_Details_Model.purchase_Time = purchase_Time;
                    arr_product_Details.push(product_Details_Model);
                    if (count > order_Details_Model.length) { return arr_product_Details; }
                }
                let get_Arr_Product_Details = async () => {
                    order_Details_Model.map(({ invoice_Number, purchase_Time }) => {
                        get_product_Details(invoice_Number, purchase_Time);
                    });
                    let arr_Product_Details = await get_product_Details();
                    console.log(arr_Product_Details);
                    let arr_purchase_Time = arr_Product_Details.map((e) => e.purchase_Time);
                    console.log(arr_purchase_Time);
                    let response = { arr_Product_Details, status: true, arr_purchase_Time };
                    res.json(response);
                }
                get_Arr_Product_Details();
            })();
        }
    }
});

module.exports = router;

