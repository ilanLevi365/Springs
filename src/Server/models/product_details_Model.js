const mongoose = require('mongoose');
const Joi = require('joi');
const product_details_Schema = mongoose.Schema({
    id: Number,
    name: String,
    img: String,
    Average_Width: String,
    clarity: String,
    color: String,
    material: String,
    tipe: String,
    weight: String,
    price: Number,
    qty: Number,
    invoice_Number: String,
    client_Id: String
});
const Product_Details_Model = mongoose.model('product_details', product_details_Schema);
exports.Product_Details_Model = Product_Details_Model;

exports.valid_Product_Details = (_bodyData) => {
    let joi_Schema = Joi.object({
        id: Joi.number().min(1).max(100).required(),
        name: Joi.string().min(1).max(100).required(),
        img: Joi.string().min(1).max(3000).required(),
        Average_Width: Joi.string().min(1).max(100).required(),
        clarity: Joi.string().min(1).max(100).required(),
        color: Joi.string().min(1).max(100).required(),
        material: Joi.string().min(1).max(100).required(),
        tipe: Joi.string().min(1).max(100).required(),
        weight: Joi.string().min(1).max(100).required(),
        price: Joi.number().min(1).max(999999).required(),
        qty: Joi.number().min(1).max(9999).required(),
        invoice_Number: Joi.string().min(1).max(9999).required(),
        client_Id: Joi.string().min(1).max(9999).required()
    });
    return joi_Schema.validate(_bodyData);
}