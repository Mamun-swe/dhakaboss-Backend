const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        minlength: [5, 'Min length gretter than 5 character'],
        required: 'First name is required.',
    },
    lastname: {
        type: String,
        trim: true,
        minlength: [5, 'Min length gretter than 5 character'],
        required: 'Last name is required.',
    },
    email: {
        type: String,
        trim: true,
        required: 'E-mail address is required.',
        lowercase: [true, 'Address is not valid.'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Address is not valid.'],
    }
})

const usersModel = mongoose.model('users', UsersSchema)
module.exports = usersModel