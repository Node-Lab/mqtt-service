const mqtt = require('mqtt');
const env = require('./environment/environment-handler');
const mqttController = require('./controller/mqtt-controller');

const client  = mqtt.connect(`${env.mqtt.host}:${env.mqtt.port}`);
 
client.on('connect', mqttController.connectHandler.bind(client));
client.on('message', mqttController.messageHandler.bind(client));