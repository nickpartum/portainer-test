const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true,  unique: true },
    password: { type: Number, required: true },
    // Add more fields as per your product requirements
});

module.exports = mongoose.model('User', userSchema);
