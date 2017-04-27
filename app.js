/**
 * Created by gadyezra on 4/27/17.
 */

var http    = require('http');
    express = require('express');
var app     = express();
var player = require('./players');


http.createServer(app).listen(3000);

app.get('/',function(req,res){
    var p1 = new player('Gady','Basketball');
    p1.increase(20);
    p1.increase(40);
    p1.decrease(40)
    p1.decrease(100);
    res.json(log);
});

var log = [];
console.log = function() {
    log.push([].slice.call(arguments));
};