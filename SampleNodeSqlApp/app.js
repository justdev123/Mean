var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Patient = require('./src/models/patient')


mongoose.connect('mongodb://localhost');

var db = mongoose.connection;

app.get('/',function(req,res){
    res.send('Hello World  12!!');
});

app.get('/api/patients',function(req,res){
    Patient.getPatients(function(err,patients){
        if(err){
            throw err;
        }
        console.log(patients.length);
        res.json(patients);

    });
});

app.listen(27017);
console.log('running on port 27017...');