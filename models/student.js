const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const { Schema } = mongoose;

const studentSchema = new Schema({

   fullName: {
        type: String,
        required: true,
        maxlength: 50
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
        required: true
    },
    university: {
        type: String,
        required: true
    },
    Major: {
        type: String,
        required: true
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

exports.student = student;
