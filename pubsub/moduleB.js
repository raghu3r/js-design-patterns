// This is the Subscriber
const pubsub = require('./pubsub');

pubsub.subscribe('PubEvent', (data) => {
  console.log('PubEvent was published with this data', data.msg);
});
