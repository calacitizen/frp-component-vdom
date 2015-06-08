var
  h = require('virtual-dom/h'),
  Kefir = require('kefir'),
  Immutable = require('immutable'),
  utils = require('./utils'),
  uiEvent = require('./uiEvent');

function processMarkup(context, state, markup) {
  var 
    props = markup.properties;
  
  props.id = this.id;
  props.className = 'vdom-component';
  
  return Kefir.constant(markup);
}

function applyArgs(fn) {
  return function(arr) {
    return fn.apply(undefined, arr);
  };
}

function createComponent(componentFn, stateS, eventS) {
  var 
    id = utils.generateUID(),
    context = Immutable.fromJS({
      id: id,
      markup: {},
      fullMarkup: {}
    }).set('stateS', stateS),
    eventSF = eventS.filter(uiEvent.filterByComponentId(id)),
    component = componentFn(stateS, eventSF),
    markupS = component.get('markupS'),
    markupStateS = Kefir.zip([stateS, markupS]),
    processFn = applyArgs(processMarkup.bind(undefined, context)),
    fullMarkupS = markupStateS.flatMapLatest(processFn);
  
  return component.set('markupS', fullMarkupS);
}

module.exports = {
  createComponent: createComponent
};