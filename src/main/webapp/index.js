const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const config = require('./config.json');
const consolidate = require('consolidate');
const inLineCss = require('nodemailer-juice');


const app = express();


//view engine setup
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');

//body paser Middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/contact.js', express.static(path.join(__dirname, 'contact.js')));

app.get('/', (req, res)=>{
    res.render('contact');
});

app.post('/send', (req, res)=>{
   const output = `
   <style>
  #bizTotal001 p {
       z-index: 100000000000;
    }
    #bizTotal001 {
       background-image:
          url('https://t1.daumcdn.net/cfile/tistory/99B2FE4C5B909A681A');
       background-repeat: none;
       background-size: 100%;
       width: 680px;
        height: 378px;
        background-size: contain;
        float: left;
    }
    #bizinfo001{
        margin-top: 20%;
        font-family: 'Nanum Gothic Coding', monospace;
    }
    
    #bizinfo001 p{
        text-align:center;
        font-size: 20px;
        color: black;
        margin: 0 auto;
        width: 300px;
    }
   </style>
   
    <div id="bizTotal001">\
       <div id="bizinfo001">\
           <p>gfv</p>\
           <p>sdf</p>\
           <p>dsf</p>\
       </div>\
    </div>\
    <div> 
        <p>You have a new contact request</p>
        <h3>Contact Detail</h3>
        <ul>
            <li>Email : ${req.body.email}</li>
            <li>Name : ${req.body.name}</li>
        </ul>
    </div>
   `;
     // create reusable transporter object using the default SMTP transport
     let transporter = nodemailer.createTransport({
        service: config.mailer.service,
        host: config.mailer.host,
        port: config.mailer.port,
        secure: false, // true for 465, false for other ports
        auth: {
            user: config.mailer.user , // generated ethereal user
            pass: config.mailer.password // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });
     transporter.use('compile', inLineCss());

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <bizinfomailtest@gmail.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: 'BizCard Contact Request✔', // Subject line
        text: 'Bizcard', // plain text body
        html: output // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg:'email has been sent'})
    });
});

app.listen(3000, ()=>console.log('server started'));