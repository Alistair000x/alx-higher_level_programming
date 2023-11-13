#!/usr/bin/node
exports.addMeMaybe = function (number, dFunction) {
  dFunction(++number);
};
