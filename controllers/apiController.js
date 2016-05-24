'use strict'

const express      = require('express'),
      contactFormController= require('./contactFormController');


let router = express.Router();

router.use('/sendEmail', contactFormController);
	
// you can simple write more controller like this
//app.use('/others', othersController);

module.exports = router;