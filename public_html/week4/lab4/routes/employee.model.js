var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required']
    },
     lastName: {
        type: String,
        required: [true, 'Last Name is Required']
    },
     department: {
        type: String,
        required: [true, 'Please Choose a Department']
    },
      startDate: {
        type: Date,
        required: [true, 'Start Date is Required']
    },
      jobTitle: {
        type: String,
        required: [true, 'Job Title is Required']
    },
      Salary: {
        type: Number,
        required: [true, 'Salary is Required']
    }
});

var Empl = mongoose.model('employee', employeeSchema);

module.exports = Empl;