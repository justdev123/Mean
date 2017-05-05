var express = require('express');
var app = express();

var sql = require("mssql");
//require("msnodesqlv8");
var config = {
   
user:'testuser1',
password:'test',
        server: 'localhost', 
        database: 'MovieDB',
        pool:{
            max:10
        }

}
ResponseModel = require('./src/NodeHelpers/ResponseModel')
//Procedures = require('./src/NodeHelpers/Procedures')
var router = express.Router();

// This is required when the node api is running on different port and angular
// service is calling from different port. 
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.header("Access-Control-Allow-Methods", "GET,DELETE,PUT,POST");
  res.header("Content-Type","application/json");

  next();
});

var connection = sql.connect(config,function(err){
    if(err)
    {
            console.log(err);
            var _responseModel = new ResponseModel('0',err);
            res.json({_responseModel});
    }
})
router.route('/movies')
.get(function(req,res){

   

        var request = new sql.Request();

        request.execute('dbo.GetAllMovies',function(err,recordset){
            if(err)
            {
                console.log(err);
                var _responseModel = new ResponseModel('0',err);
                res.json({_responseModel});
            }
            var _responseModel = new ResponseModel('1','Success',recordset);
            //console.log(recordset);
            res.send(_responseModel);   
            //sql.close();
        });

   
});

router.route('/movies/getcountbygenre')
.get(function(req,res){

 

        var request = new sql.Request();

        request.execute('dbo.GetMovieCountByGenre',function(err,recordset){
            if(err)
            {
                console.log(err);
                var _responseModel = new ResponseModel('0',err);
                res.json({_responseModel});
            }
            var _responseModel = new ResponseModel('1','Success',recordset);
            //console.log(recordset);
            res.send(_responseModel);   
           // sql.close();
        });
   
   
});
app.use('/api',router);

app.listen(3000);
console.log('running on port 3000...');