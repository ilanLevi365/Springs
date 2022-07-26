const mongoose = require('mongoose');
const Joi = require('joi');
const client_details_Schema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    address: String,
    locality: String
});
const Client_Details_Model = mongoose.model('client_details', client_details_Schema);
const valid_Client_Details = (_bodyData) => {
    let joi_Schema = Joi.object({
        email: Joi.string().min(1).max(300).required(),
        password: Joi.string().min(1).max(30).required(),
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().min(1).max(20).required(),
        address: Joi.string().min(0).max(300),
        locality: Joi.string().min(0).max(300),
    });
    return joi_Schema.validate(_bodyData);
}

exports.Client_Details_Model = Client_Details_Model;
exports.valid_Client_Details = valid_Client_Details;
