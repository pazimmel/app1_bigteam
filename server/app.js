var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var createEmployee = require('./modules/createEmployee');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/employees_group_project');
mongoose.model('Employee', new Schema({
    name:String,
    salary:String,
    tenure:String,
    level:String
}, {collection: "employees"}));

var Employee = mongoose.model('Employee');

app.set("port", process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.post('/data',function(req, res){
    console.log(req.body);
    var employeeInfo = createEmployee(req.body);
    var addedEmployee = new Employee({  'name':employeeInfo.name,
                                        'salary': employeeInfo.salary,
                                        "tenure": employeeInfo.tenure,
                                        "level": employeeInfo.level
    })
   addedEmployee.save(function(err, data){
       if (err){
           console.log(err)
       }
       res.send(data);
   })
});

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname , './public', file));
});


app.listen(app.get('port'), function(){
   console.log("listening on ", app.get("port"));
});



