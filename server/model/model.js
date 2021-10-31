const mongoose = require('mongoose');

var schema = new mongoose.Schema({

    first_name:{
        type: String,
        required: 'please enter your first name'
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    pwd:{
        type: String,
        required: true
    },
    user_name:{
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;