const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const { Schema } = mongoose;

const companyOrderSchema = new Schema({

    company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},

    typeOfOrder: {
        type: String,
        required: true,
    },
    Major: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    salary: {
        type: Boolean,
        required: true
    },
    createDate: {type: Date }
});


const companyOrder = mongoose.model('companyOrders', companyOrderSchema);

function validateUser(user) {
    const Schema = {
        fullName: Joi.string().max(50).required(),
        email: Joi.string().min(5).max(255).required().email()
    };

    return Joi.validate(user, Schema);
}


exports.companyOrder = companyOrder;
exports.validate = validateUser;
