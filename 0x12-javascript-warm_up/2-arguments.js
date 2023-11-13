#!/usr/bin/node
const process = require('process');

const ArgumentsCalculation = process.argv.length;

if (ArgumentsCalculation === 2) {
  console.log('No argument');
} else if (ArgumentsCalculation === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
