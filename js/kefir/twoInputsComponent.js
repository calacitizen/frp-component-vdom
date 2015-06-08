var
  Immutable = require('immutable'),
  h = require('./immutableH'),
  subComp = require('./subComponent'),
  inputComponent = require('./inputComponent');

function fieldSelector(field) {
  return function(im) {
    return im.get(field);
  };
}

module.exports = function(stateS, eventS) {
  var
    fs = fieldSelector,
    inp = inputComponent,
    markupS = stateS.map(function(s) {
      var 
        str = '==' + s.get('v1') + ' ' + s.get('v2') + '==';
      
      return h(
        'div', {},
        [str, subComp(inp, fs('v1')), subComp(inp, fs('v2'))]
      );
    }),
    map = Immutable.Map();
  
  return map.set('markupS', markupS);
};