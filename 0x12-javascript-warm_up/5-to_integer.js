#!/usr/bin/node

const process = require('process');

const Argument = process.argv[2];

const isInteger = Number.isInteger(Number(Argument));

if (isInteger) {
  console.log(`My number: ${Argument}`);
} else {
  console.log('Not a number');
}
