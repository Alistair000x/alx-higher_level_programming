#!/usr/bin/node

const process = require('process');
const numberOfO = process.argv[2];
if (!Number.isInteger(Number(numberOfO))) {
  console.log('Missing number of occurrences');
}
const numberOfOAsInteger = Number(numberOfO);
for (let i = 0; i < numberOfOAsInteger; i++) {
  console.log('C is fun');
}
