var
  h = require('virtual-dom/h'),
  diff = require('virtual-dom/diff'),
  patch = require('virtual-dom/patch'),
  createElement = require('virtual-dom/create-element');


function syncVDomMarkupStream(rootEl, markupS, eventEmitter) {

  var
    rootNode = null,
    oldMarkup = null,
    diffM = null;

  markupS.onValue(function(markup) {
    if (!rootNode) {
      oldMarkup = markup;
      rootNode = createElement(markup);
      rootEl.appendChild(rootNode);
    } else {
      diffM = diff(oldMarkup, markup);
      rootNode = patch(rootNode, diffM);
      oldMarkup = markup;
    }
  });
}

module.exports = {
  syncVDomMarkupStream: syncVDomMarkupStream
};
