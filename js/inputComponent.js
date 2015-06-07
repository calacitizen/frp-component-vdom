var
  Immutable = require('immutable'),
  h = require('./immutableH');

module.exports = function(stateS, eventS) {
  var
    markupS = stateS.map(function(s) {
      return h('input', {
          type: 'text',
          value: s
        }
      );
    }),
    map = Immutable.Map().set('markupS', markupS);
  
  return map;
};