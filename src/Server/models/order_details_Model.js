const mongoose = require('mongoose');
const Joi = require('joi');
const order_details_Schema = mongoose.Schema({
    invoice_Number: String,
    purchase_Time: String,
    client_Id: String,
    order_Total: Number,
    total_Items: Number
});
const Order_Details_Model = mongoose.model('order_details', order_details_Schema);
exports.Order_Details_Model = Order_Details_Model;

exports.valid_Order_Details = (_bodyData) => {
    let joi_Schema = Joi.object({
        invoice_Number: Joi.string().min(1).max(9999).required(),
        purchase_Time: Joi.string().min(1).max(9999).required(),
        client_Id: Joi.string().min(1).max(9999).required(),
        order_Total: Joi.number().min(1).max(999999).required(),
        total_Items: Joi.number().min(1).max(999).required()
    });
    return joi_Schema.validate(_bodyData);
}