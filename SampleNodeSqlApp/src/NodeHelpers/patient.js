var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
   
    firstname: {
        type : String
     },
     lastname: {
        type : String
     },

     email: {
        type : String
     },
     phone: {
        type : String
     },
     dateofbirth: {
        type : String
     }, 
     q1: {
        type : String
     },
      q2: {
        type : String
     }
},
{collection : 'patient'});


var Patient = module.exports = mongoose.model('patient',patientSchema);


