const fs = require('fs');
const ObjectStorage = require('../lib');
const config = require('./config');

const client = new ObjectStorage(config);

client.pipeableDownload({
  container: 'my-container',
  name: 'my-file'
}).pipe(fs.createWriteStream('test.png'));