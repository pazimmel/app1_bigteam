var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var createEmployee = require('./modules/createEmployee');

app.set("port", process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded:true}));

app.post('/data',function(req, res){
    console.log(req.body);
    console.log(createEmployee(req.body));
    res.send("hello");
});

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname , './public', file));
});


app.listen(app.get('port'), function(){
   console.log("listening on ", app.get("port"));
});



