#!/usr/bin/node

const process = require('process');

const Argumentf = process.argv[2];
const Arguments= process.argv[3];

if (!Argumentf || !Arguments) {
  console.log('undefined is undefined');
} else {
  console.log(`${Argumentf} is ${Arguments}`);
}
