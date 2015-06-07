var
  Immutable = require('immutable');
  
module.exports = function(componentFn, stateTransformFn) {
  return Immutable.fromJS({
    isSubComponent: true,
    componentFn: componentFn,
    stateTransformFn: stateTransformFn
  });
};