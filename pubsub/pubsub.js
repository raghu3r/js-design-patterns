//First off, we create an object, which we’ll call subscribers, to keep track of registered subscriber callbacks. Inside this object, we will eventually store events key/value pairs. Each event will have a key corresponding to the event name and a value set to an array. In this array, we will register/store subscriber callbacks. These callbacks are invoked whenever the event gets triggered and we may have several of such callbacks firing for any given event.

let subscribers = {};

// been registered in the subscribers object. If the event does not exist on the subscribers object, we know it hasn’t been registered and so we register it using the event name as the key and we initialize the value to an empty array. Lastly, we’ll push the subscriber callback into the event array.

const subscribe = (e, callback) => {
  let index;

  if (!subscribers[e]) {
    subscribers[e] = [];
  }

  index = subscribers[e].push(callback) - 1;

  return {
    unsubscribe() {
      subscribers[e].splice(index, 1);
    },
  };
  // subscribers[e].push(callback);
};

const publish = (e, data) => {
  if (!subscribers[e]) return;

  subscribers[e].forEach((subscriberCallback) => {
    subscriberCallback(data);
  });
};

// Next, the pubsub module exports two functions. One to ‘publish’ an update and another to ‘subscribe’ to updates.

module.exports = {
  publish,
  subscribe,
};
