var express = require('express');
var app = express();

//app.use("/css",express.static(__dirname + '/src/assets/css'));
//console.log(__dirname)

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var mongoose = require('mongoose');

Patient = require('./src/NodeHelpers/patient')
ResponseModel = require('./src/NodeHelpers/ResponseModel')

mongoose.connect('mongodb://localhost:27017/patients');

var db = mongoose.connection;


var router = express.Router();


// This is required when he node api is running on different port and angular
// service is calling from different port. 
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST");
  res.header("Content-Type","application/json");

  next();
});

router.get('/',function(req,res){
    res.send('Hello World  12!!');
});




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
    patient.firstname = req.body.firstname;
    patient.lastname = req.body.lastname;
    patient.dateofbirth = req.body.dateofbirth;
    patient.email = req.body.email;
    patient.phone = req.body.phone;
    
    patient.q1 = req.body.q1;
    patient.q2 = req.body.q2;

    patient.save(function(err) {
            if (err)
            {
                 var _responseModel = new ResponseModel('0',err);
                 res.json({ _responseModel });
            }
               
            var _responseModel = new ResponseModel('1','Patient created!');
            res.json({ _responseModel });
        });
});

router.route('/patients/:id')

.get(function(req,res){
    Patient.findById(req.params.id,function(err,patient){
          if(err){
            var _responseModel = new ResponseModel('0',err);
            res.json({ _responseModel });
            //res.send(err);
        }

        res.json(patient);
    })
})

.put(function(req,res){
    Patient.findById(req.params.id,function(err,patient){
          if(err){
              var _responseModel = new ResponseModel('0',err);
             res.send(_responseModel);
        }
    patient.firstname = req.body.firstname;
    patient.lastname = req.body.lastname;
    patient.dateofbirth = req.body.dateofbirth;

    patient.email = req.body.email;
    patient.phone = req.body.phone;
    
    patient.q1 = req.body.q1;
    patient.q2 = req.body.q2;

        patient.save(function(err) {
            if (err)
            {
                var _responseModel = new ResponseModel('0',err);
                res.send(_responseModel);
            }
            var _responseModel = new ResponseModel('1','Patient Updated!');
            res.json({ _responseModel });
        });
    });
})

.delete(function(req,res){
    Patient.remove({
        _id: req.params.id
    },function(err,patient){
        if(err)
        {
              var _responseModel = new ResponseModel('0',err);
              res.send(_responseModel);
        }
           var _responseModel = new ResponseModel('1','Patient Deleted.');
            res.json({ _responseModel });
    })

})

app.use('/api',router);

app.listen(3000);
console.log('running on port 3000...');