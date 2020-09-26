// This is the Publisher

const pubsub = require('./pubsub');

module.exports = {
  publishEvent() {
    const data = {
      msg: 'Secret Data',
    };
    pubsub.publish('PubEvent', data);
  },
};
