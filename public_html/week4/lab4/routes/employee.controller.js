
var Empl = require('./employee.model');
var debug = require('debug')('demo:employee');

module.exports.home = function(req, res){
        
    if (req.method === 'POST') {
        
        
       var msg = '';
        
        Empl.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          startDate: req.body.startDate,
          jobTitle: req.body.jobTitle,
          Salary: req.body.Salary
        })
        .then(function(){
            msg = 'Employee Data was Saved';
            return;
        })
        .catch(function(err){            
            msg = 'All Fields Required';
            return err;
        }).then(function(err){
            res.render('index', { 
                title: 'Enter Employee Information',
                message : msg,
                error: err
             });
        });   
              
    } else {
        res.render('index', { 
            title: 'Enter Employee Information',
            message : ''
        }); 
    }
     
};

module.exports.view = function(req, res){
    
     var id = req.params.id,
         removed = '';
   
       Empl
       .find()
       .exec()
       .then(function(results){
            res.render('view', { 
                title: 'View Employees',
                results : results,
                removed : removed
            });
       });
    
};


module.exports.delete = function(req, res){
     var id = req.params.id;
     removed = "ID was not found";
     
     if(id){
         Empl.remove({ _id: id })
        .then(function(){            
            removed = `${id} has been removed`;
            finish();
        })
        .catch(function (err) {            
            removed = `${id} has not been removed`;
            finish(); 
        });                           
     } else {
      finish();
    }
     function finish(){
     res.render('delete', { 
                title: removed

             });
}
}

module.exports.update = function(req, res){
    
    var id = req.params.id;
    var msg = '';
    
    if (req.method === 'POST') {
         
        id = req.body._id;

        Empl
            .findById(id)
            .exec() 
            .then(function(employeeData) {
                employeeData.firstName = req.body.firstName;
                employeeData.lastName = req.body.lastName;
                employeeData.department = req.body.department;
                employeeData.startDate = req.body.startDate;
                employeeData.jobTitle = req.body.jobTitle;
                employeeData.Salary = req.body.Salary;

                return employeeData.save();
                                
            })
            .then(function(){
                msg = 'data has been updated';
                 finish();
            })
            .catch(function(){
                msg = 'data has NOT been updated';
                 finish();
            });
        
    }else{
        finish();
    }
     function finish(){ 
    Empl
    .findOne({ '_id': id })
    .exec()
    .then(function(results){    
        res.render('update', { 
            title: 'Update Results',
            message: msg,
            results : results
        });
    })
    .catch(function(){
        res.render('notfound', { 
            message: 'Sorry ID not found'
        });
    });
     }
};