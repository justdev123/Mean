var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('superSecret', 'test'); // secret variable
var sql = require("mssql");
var config = {
    user: 'testuser1',
    password: 'test',
    server: 'localhost',
    database: 'MovieDB',
    pool: {
        max: 10
    }
}
ResponseModel = require('./src/NodeHelpers/ResponseModel')

//Procedures = require('./src/NodeHelpers/Procedures')
var router = express.Router();

// This is required when the node api is running on different port and angular
// service is calling from different port. 
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,DELETE,PUT,POST");
    res.header("Content-Type", "application/json");

    next();
});

var connection = sql.connect(config, function (err) {
    if (err) {
        console.log(err);
        var _responseModel = new ResponseModel('0', err);
        res.json({ _responseModel });
    }
})
router.route('/movies')
    .get(function (req, res) {

        var request = new sql.Request();


        request.execute('dbo.GetAllMovies', function (err, recordset) {
            if (err) {
                console.log(err);
                var _responseModel = new ResponseModel('0', err);
                return res.json({ _responseModel });
            }
            var _responseModel = new ResponseModel('1', 'Success', recordset);
            //console.log(recordset);
            res.send(_responseModel);
            //sql.close();
        });


    });

router.route('/movies/getcountbygenre')
    .get(function (req, res) {
        var request = new sql.Request();

        request.execute('dbo.GetMovieCountByGenre', function (err, recordset) {
            if (err) {
                console.log(err);
                var _responseModel = new ResponseModel('0', err);
                return res.json({ _responseModel });
            }
            var _responseModel = new ResponseModel('1', 'Success', recordset);
            //console.log(recordset);
            res.send(_responseModel);
            // sql.close();
        });


    });

router.route('/users')
    .post(function (req, res) {

        var request = new sql.Request();


        request.input('UserName', sql.NVarChar, req.body.username);
        request.input('Email', sql.NVarChar, req.body.email);
        request.input('Password', sql.NVarChar, req.body.password);
        request.output('ID', sql.Int);
        request.execute('dbo.CreateUser', function (err, recordset) {
            if (err) {
                console.log(err);
                var _responseModel = new ResponseModel('0', err);
                return res.json({ _responseModel });
            }
            var _responseModel = new ResponseModel('1', 'Success', recordset);
            //console.log(recordset);
            res.json(_responseModel);
        })

    });


router.route('/customers')
    .get(function (req, res) {
        var request = new sql.Request();
console.log('customer get');
        request.execute('dbo.GetAllCustomers', function (err, recordset) {
            if (err) {
                console.log(err);
                var _responseModel = new ResponseModel('0', err);
                return res.json({ _responseModel });
            }
            var _responseModel = new ResponseModel('1', 'Success', recordset);
            //console.log(recordset);
            res.send(_responseModel);
            // sql.close();
        });


    })
    .post(function (req, res) {
        var request = new sql.Request();
        request.input('FirstName', sql.NVarChar, req.body.firstname);
        request.input('LastName', sql.NVarChar, req.body.lastname);
        request.input('Email', sql.NVarChar, req.body.email);
        request.input('Phone', sql.NVarChar, req.body.phone);
        request.input('DOB', sql.NVarChar, req.body.dob);
        request.output('ID', sql.Int);
        request.execute('dbo.CreateCustomer', function (err, recordset) {
           var _responseModel =null; 
            if (err) {
                console.log(err);
                _responseModel = new ResponseModel('0', err);
                return res.json({ _responseModel });
            }
            
            if(recordset.output.ID=='-1'){
                 _responseModel = new ResponseModel(recordset.output.ID, 'Warning', recordset);
            }else
            {
                 _responseModel = new ResponseModel('1', 'Success', recordset);
            //console.log(recordset);
            }
            return res.json(_responseModel);
        })

    });


    

router.route('/users/authenticate')
    .post(function (req, res) {
        console.log('Authenticate Service called');

        var request = new sql.Request();

        request.input('UserName', sql.NVarChar, req.body.username);
        request.input('Password', sql.NVarChar, req.body.password);
        request.output('isExists', sql.Bit);

        request.execute('dbo.AuthenticateUser', function (err, recordset) {
            var _responseModel = null;
            if (err) {
                console.log(err);
                _responseModel = new ResponseModel('0', err);
                res.json({ _responseModel });
            }
            else {
                //   
                if (recordset.output['isExists']) {
                    var token = jwt.sign({ name: req.body.username }, app.get('superSecret'));
                    var result = {
                        username: req.body.username,
                        token: token,
                    }
                    _responseModel = new ResponseModel('1', 'Success', result);
                } else {
                    var result = {
                        username: req.body.username,
                        token: null,
                    }
                    _responseModel = new ResponseModel('3', 'Fail', result);
                }
            }
            res.json(_responseModel);
        })
    });
app.use('/api', router);

app.listen(3000);
console.log('running on port 3000...');