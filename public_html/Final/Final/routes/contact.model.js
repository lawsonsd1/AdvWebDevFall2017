var mongoose = require('mongoose');

var contact = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Name is Required']
    },
     phoneNumber: {
        type: Number,
        required: [true, 'Phone number is Required']
    },
     phoneType: {
        type: String,
        required: [true, 'Please Choose a phone type']

     }
});

var Empl = mongoose.model('contact', contact);

module.exports = Empl;