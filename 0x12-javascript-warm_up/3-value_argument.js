#!/usr/bin/node
const process = require('process');
const count = process.argv[2];
if (!count){
	console.log('No argument');
} else {
	console.log(count);
}
