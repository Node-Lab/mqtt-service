const createServerHandler = () => {
  console.log('Mosca server is up and running')
};

const clientConnectedHandler = (client) => {
  console.log('client connected', client.id);
};

module.exports = {
  createServerHandler,
  clientConnectedHandler
}