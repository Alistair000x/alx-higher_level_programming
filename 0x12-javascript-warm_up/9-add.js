#!/usr/bin/node

function add (a, b) {
  return a + b;
}
const Argumentf = process.argv[2];
const Arguments = process.argv[3];
if (!Number.isInteger(Number(Argumentf)) || !Number.isInteger(Number(Arguments))) {
  console.log('NaN');
}
const ArgumentfAsInteger = Number(Argumentf);
const ArgumentsAsInteger = Number(Arguments);
const sum = add(ArgumentfAsInteger, ArgumentsAsInteger);
console.log(sum);
