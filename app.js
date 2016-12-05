'use strict';

const express = require('express');
const app = express();
const port = 8080;

app.get('/home', function(req, res) {
    res.sendfile('home.html')
});

app.post('/json', function(req, res){
    res.sendfile('app.json');
})

app.use('*', function (req, res) {
    res.sendfile('error.html');
});


app.listen(port, function(){
    console.log('Test app running on port', port);
});