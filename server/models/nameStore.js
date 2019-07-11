const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nameSchema = new Schema({
    name:String
});

const Name = mongoose.model('Name',nameSchema);
module.exports = Name;