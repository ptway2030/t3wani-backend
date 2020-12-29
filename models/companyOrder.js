const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { Schema } = mongoose;

const companyOrderSchema = new Schema({

    company:{type: mongoose.Schema.Types.ObjectId, ref:'companies'},

    typeOfOrder: {
        type: String,
        required: true,
    },
    Major: {
        type: String,
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



exports.companyOrder = companyOrder;
