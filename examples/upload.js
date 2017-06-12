const path = require('path');
const ObjectStorage = require('../lib');
const config = require('./config');

const client = new ObjectStorage(config);
const file = path.join(__dirname, "smiley.jpg")

client.upload({
  container: 'all-teacher-assets',
  name: 'happy',
  file
})
.then(r => console.log(r))
.catch(e => console.log(e))