var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    FName: {
        type : String
     },
     LName: {
        type : String
     },

     Email: {
        type : String
     },
     phone: {
        type : String
     },
    
},
{collection : 'patient'});


var Patient = module.exports = mongoose.model('patient',patientSchema);

// get patients

module.exports.getPatients = function(callback,limit){
console.log('test2');
 Patient.find({}, function(err, patients) {
  if (err) throw err;

  // object of all the users
  console.log(patients.length);
});
}
