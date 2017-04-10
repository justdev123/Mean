var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('mongoose');

Patient = require('./src/NodeHelpers/patient')

mongoose.connect('mongodb://localhost:27017/patients');

var db = mongoose.connection;


var router = express.Router();



// This is required when he node api is running on different port and angular
// service is calling from different port. 
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Content-Type","application/json");

  next();
});

router.get('/',function(req,res){
    res.send('Hello World  12!!');
});

app.use('/api',router);


router.route('/patients')
// Get Patients
.get(function(req,res){
    Patient.find(function(err,patients){
        if(err){
            res.send(err);
        }
        res.json(patients);

    });
})
.post(function(req,res){
    var patient = new Patient();
    patient.firstName = req.body.firstName;
    patient.lastName = req.body.lastName;
    patient.DateOfBirth = req.body.DateOfBirth;
    patient.email = req.body.email;
    patient.phone = req.body.phone;
    
    patient.question1 = req.body.question1;
    patient.question2 = req.body.question2;

    patient.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Patient created!' });
        });
});



app.listen(3000);
console.log('running on port 3000...');