const fs = require('fs');
const path = require('path');
const pkgcloud = require('pkgcloud');
const rp = require('request-promise');
const stream = require('stream');

modules.exports = ObjectStore(config) {
  constructor(config) {
    this._client = pkgcloud.storage.createClient(config);
  }

  upload({
    container, 
    name,
    file
  }) {
    return new Promise((resolve, reject) => {
      const readStream = fs.createReadStream(file);
      const writeStream = this._client.upload({
        container: container,
        remote: name
      });

      writeStream.on('error', function (err) {
        reject(err);
      });

      writeStream.on('success', function (file) {
        resolve(file);
      });

      readStream.pipe(writeStream);
    });
  }

  download({
    container,
    name,
  }) {
    const str = new stream.Writable();
    return this._client.download({
      container,
      remote: name,
      stream: str,
    }, function(err, res) {
      console.log(err)
      console.log(res)
    });
  }

  pipeableDownload({
    container,
    name,
  }, cb) {
    return this._client.download({
      container,
      remote: name,
    }, cb);
  }

}
