function connectHandler () {
  this.subscribe('subTest');
  this.publish('subTest', 'awesome mqtt!');
}

function messageHandler (topic, message) {
  console.log(topic, message.toString());
  this.end();
}

module.exports = {
  connectHandler,
  messageHandler
}