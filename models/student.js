const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const { Schema } = mongoose;

const studentSchema = new Schema({

   fullName: {
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
        minlength: 5,
        maxlength: 255
    },
    university: {
        type: String,
        required: true
    },
    Major: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    trainingSemester: {
        type: String,
        required: true
    },
    trainingSemesterMonth: {
        type: String,
        required: true
    },
    trainingSemesterYear: {
        type: String,
        required: true
    },
    createDate: {type: Date }
});


const student = mongoose.model('students', studentSchema);

function validateUser(user) {
    const Schema = {
        fullName: Joi.string().max(50).required(),
        email: Joi.string().min(5).max(255).required().email()
    };

    return Joi.validate(user, Schema);
}





exports.student = student;
exports.validate = validateUser;
