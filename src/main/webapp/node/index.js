/**
 * 
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const consolidate = require('consolidate');
const app = express();


app.engine('html', consolidate.handlebars);
app.set('view engine', 'html')
//static folder
// css 파일 
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
console.log(request.url);
//body parser Middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.get('/', (req, res)=>{
    res.render('list');
})

app.post('/send', (req,res) => {
    console.log(req.body);
});

app.listen('3000', ()=>{
    console.log('Server Started');
})