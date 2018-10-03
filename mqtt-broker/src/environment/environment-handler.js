const yaml = require('js-yaml');
const fs = require('fs');

const env = yaml.safeLoad(fs.readFileSync(__dirname + '/environment.yml', 'utf8'));

module.exports = env;