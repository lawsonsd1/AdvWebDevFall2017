var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: {
        type: String 
    },
     lastName: {
        type: String
    },
     department: {
        type: String 
    },
      startDate: {
        type: Date
    },
      jobTitle: {
        type: String
    },
      Salary: {
        type: Number
    }
});

var Empl = mongoose.model('employee', employeeSchema);

module.exports = Empl;