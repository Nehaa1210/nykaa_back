const mongoose = require('mongoose');


const connection = mongoose.connect("mongodb+srv://neha:singh@cluster0.nznbcxe.mongodb.net/nykaausers?retryWrites=true&w=majority");

module.exports = { connection };   