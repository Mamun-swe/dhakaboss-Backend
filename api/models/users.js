const mongoose = require('mongoose')
const Schema = mongoose.Schema

var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UsersSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        minlength: [5, 'Min length gretter than 5 character.'],
        required: [true, 'First name is required.'],
    },
    lastname: {
        type: String,
        trim: true,
        minlength: [5, 'Min length gretter than 5 character.'],
        required: [true, 'Last name is required.'],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'E-mail address is required.'],
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address.']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required.'],
        minlength: [8, 'Minimum password lenght is 8 character.'],
    },
    role: {
        type: String,
        default: 'basic',
        enum: ["basic", "admin", "superadmin"]
    },
    gender: {
        type: String,
        trim: true,
        default: null
    },
    phone: {
        type: String,
        trim: true,
        default: null,
        minlength: [11, 'Enter a valid phone number.'],
    }
})

const usersModel = mongoose.model('users', UsersSchema)
module.exports = usersModel