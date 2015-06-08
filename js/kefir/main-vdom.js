window.onload = function() {
  var
    Kefir = require('kefir'),
    Immutable = require('immutable'),
    EventEmitter = require('eventemitter').EventEmitter,
    VDomAdapter = require('./vdom-stream-adapter'),
    rootNode = document.getElementById('ctr'),
    ComponentF = require('./componentFactory'),
    twoInputsComponent = require('./twoInputsComponent');

  var
    rootEmitter = new EventEmitter(),
    rootEventS = Kefir.fromEvents(rootEmitter),
    rootStateS = Kefir.sequentially(1000, [1, 2, 3, 4, 5]).map(function(v) {
      var map = Immutable.fromJS({
        v1: v,
        v2: v + 100
      });
      return map;
    }),
    rootComponent = ComponentF.createComponent(twoInputsComponent, rootStateS, rootEventS);

  VDomAdapter.syncVDomMarkupStream(rootNode, rootComponent.get('markupS'), rootEmitter);
};