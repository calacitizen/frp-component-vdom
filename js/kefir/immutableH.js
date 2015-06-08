var
  Immutable = require('immutable');
  
module.exports = function(tagName, props, children) {
  return Immutable.fromJS({
    tagName: tagName,
    props: props,
    children: children || []
  });
};