const mosca = require('mosca');
const mqttController = require('./controller/mqtt-controller');
const env = require('./environment/environment-handler');

const settings = {
      port: env.mqtt.port,
      persistence: mosca.persistence.Memory
};
 
 
const server = new mosca.Server(settings, mqttController.createServerHandler);
 
server.clientConnected = mqttController.clientConnectedHandler;
 