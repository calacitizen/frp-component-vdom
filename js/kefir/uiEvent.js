function createEvent(componentId, originalEvent) {
  this.componentId = componentId;
  this.originalEvent = originalEvent;
}

function filterByComponentId(componentId) {
  return function(event) {
    return event.componentId === componentId;
  };
}


module.exports = {
  createEvent: createEvent,
  filterByComponentId: filterByComponentId
};