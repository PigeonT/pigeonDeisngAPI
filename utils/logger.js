'use strict'

var Logger = function (options) {

	if(typeof options !== 'object') {
		console.error('not valid options');
		return;
	}
	if(!options.hasOwnProperty('filePath')) {
		console.error('you must assign a log path to store, the property is "filePath"');
		return;
	}

	// to extend in future, now just preserve it here
	var defaults = {
		filePath : '',
		logName : 'serverLog.log'
	}

	for(let property in options) {
		defaults[property] = options[property];
	}

	this.options = defaults;
	this.fs = require('fs');

	this.fs.appendFile(this.options.filePath + this.options.logName, '', 
		{encoding : 'utf8',
		 flag : 'a+'});
}

Logger.prototype.log = function(logContent) {

	var content = logContent + '\t' + Date.now();

	this.fs.appendFile(this.options.filePath + this.options.logName, '\n' + content, function (err, result) {
	    if (err) 
	        return console.log(err);
	});
}

module.exports = Logger;