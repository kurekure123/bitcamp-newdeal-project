/**
 * 
 */
var express = require('express');
var app = express();
console.log('express : ' + express);
console.log('filename : ' + __filename);
console.log('dirname : ' + __dirname);

app.listen('3000', function(){
    console.log('hello world');
})