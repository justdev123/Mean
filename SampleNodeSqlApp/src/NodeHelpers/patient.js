var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
    firstName: {
        type : String
     },
     lastName: {
        type : String
     },

     email: {
        type : String
     },
     phone: {
        type : String
     },
     DateOfBirth: {
        type : String
     }, 
     question1: {
        type : String
     },
      question2: {
        type : String
     }
},
{collection : 'patient'});


var Patient = module.exports = mongoose.model('patient',patientSchema);

// get patients

/*module.exports.getPatients = function(callback){

 Patient.find({}, function(err, patients) {
      if (err) throw err;

      // object of all the users
      if(patients.length==0){
        console.log('no data found');
      }
      
      callback(null, patients);

});
}


module.exports.addPatient = function(callback){
  console.log('patient js');

    Patient.create({}, function(err, patient) {
       console.log(patient);
      if (err) throw err;      
  });
}
*/

