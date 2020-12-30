const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const { Schema } = mongoose;

const adminSchema = new Schema({


    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    isAdmin:Boolean
});

adminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, keys.jwtKey);

    return token;
}
adminSchema.index({  email:1 });
const Admin = mongoose.model('users', adminSchema);




exports.Admin = Admin;
