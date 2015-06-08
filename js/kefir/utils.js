var
  _ = require('lodash'),
  lastUID = 0;

function getArgs(args, startFrom) {
   return Array.prototype.slice.call(args, startFrom || 0);
}

function generateUID() {
  lastUID++;
  return 'id' + lastUID;
}

function assert(descr, cond) {
   if (!cond) {
      var toLog = Array.prototype.slice.call(arguments, 2);
      if (toLog.length) {
         console.error.apply(console, [descr].concat(toLog));
      }
      throw new Error(descr);
   }
}


module.exports = {
  assert: assert,
  generateUID: generateUID
};