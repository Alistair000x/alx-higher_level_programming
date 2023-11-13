#!/usr/bin/node
const process = require('process');

const ArgumentsCalculation = process.argv.length;

if (ArgumentsCalculation === 2) {
  console.log('Argument found');
} else if (ArgumentsCalculation > 2) {
  console.log('Arguments found');
} else {
  console.log('No argument');
}
