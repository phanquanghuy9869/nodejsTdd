const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
});
exports.User = mongoose.model('User', userSchema);