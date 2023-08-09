const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static register method
userSchema.statics.register = async function (email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled.')
    }
    if (!validator.isEmail(email)) {
        throw Error('Please use a valid email.')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password must have at least one uppercase letter, one symbol, and one number.')
    }

    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use.')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash,
    })

    return user;
}

module.exports = mongoose.model('User', userSchema)