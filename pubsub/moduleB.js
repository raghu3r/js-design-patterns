// This is the Subscriber
const pubsub = require('./pubsub');

let subscription;

subscription = pubsub.subscribe('PubEvent', (data) => {
  console.log('PubEvent was published with this data', data.msg);
  subscription.unsubscribe();
});
