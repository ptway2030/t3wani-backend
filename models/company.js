const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { Schema } = mongoose;

const companySchema = new Schema({

   companyName: {
        type: String,
        required: true,
        maxlength: 50,
        unique: false
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    phone: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    sizeOfCompany: {
        type: Number,
        required: true
    },
    CompanySpecialist: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    superVisorName: {
        type: String,
        required: true
    },
    orders:[{type: mongoose.Schema.Types.ObjectId, ref:'companyOrders'}],

    createDate: {type: Date }
});


const Company = mongoose.model('companies', companySchema);

function validateUser(user) {
    const Schema = {
        companyName: Joi.string().max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.number().required(),
        city: Joi.string().required(),
        sizeOfCompany: Joi.number().required(),
        CompanySpecialist: Joi.string().required(),
        Address: Joi.string().required(),
        sector: Joi.string().required(),
        superVisorName: Joi.string().required(),
        orders: Joi.string().required(),

    };

    return Joi.validate(user, Schema);
}





exports.Company = Company;
exports.validate = validateUser;
