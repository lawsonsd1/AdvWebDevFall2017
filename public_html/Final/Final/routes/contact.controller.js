
var Empl = require('./contact.model');
var debug = require('debug')('demo:employee');

module.exports.home = function(req, res){
        
    if (req.method === 'POST') {
        
        
       var msg = '';
        
        Empl.create({
          Name: req.body.Name,
          phoneNumber: req.body.phoneNumber,
          phoneType: req.body.phoneType
        })
        .then(function(){
            msg = 'Contact Data was Saved';
            return;
        })
        .catch(function(err){            
            msg = 'All Fields Required';
            return err;
        }).then(function(err){
            res.render('index', { 
                title: 'Enter Contact Information',
                message : msg,
                error: err
             });
        });   
              
    } else {
        res.render('index', { 
            title: 'Enter Contact Information',
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
                title: 'View Contacts',
                results : results,
                removed : removed
            });
       });
    
};
