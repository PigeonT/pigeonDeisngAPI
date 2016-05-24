'use strict'

const contentTypes = require('../utils/content-types'),
	  express = require('express'),
	  contactFormController = require('./contactFormController'),
	  nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "pigeon.tian@gmail.com",
       pass: "Buej2d31@gmail.com"
   },
   secureConnection : true,
   host : 'smtp.gmail.com',
   port : 465
});

let router = express.Router();

router.post('/fromPigeonTTODispatch', function(req, res, next) {
	let name = req.body.name || 'Anonymous';
	let email = req.body.email || 'pigeon.tian@gmail.com';
	let message = req.body.message || 'from pigeonT.github.io'

	smtpTransport.sendMail({
	   from: email, // sender address
	   to: "pigeon.tian@gmail.com", // comma separated list of receivers
	   subject: "hello from pigeont.github.io from" + name, // Subject line
	   text: message // plaintext body
	}, function(error, response){
	   if(error){
	       console.log(error);
	   }else{
	       console.log("Message sent: " + response.message);
	   }
});

    res.send('fromPigeonTTODispatch received!');
});

router.get('/test', function(req, res) {
  res.send('test method received');
});



module.exports = router;






