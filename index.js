var express = require('express');
var app = express();

var parameterFunction = require('./params');
let data = require('./data');

app.listen(8000, function(){
    console.log('Listening on port 8000');
});

app.get('/', function(req,res){
    res.send('hiii');
});

app.get('/param/:data', function(req, res){
    const data = req.params.data;
    res.send(parameterFunction(data));
});

app.get('/data/:item', function(req, res){
    var item = req.params.item;
    var result = data["date items"][item];
    res.send(result);
})