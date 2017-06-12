const fs = require('fs');
const ObjectStorage = require('../lib');

const client = new ObjectStorage({
  provider: 'openstack',
  useServiceCatalog: true,
  useInternal: false,
  keystoneAuthVersion: 'v3',
  authUrl: 'https://identity.open.softlayer.com',
  tenantId: '<YOUR-PROJECT-ID>',
  domainId: '<YOUR-DOMAIN-ID>',
  username: '<YOUR-USERNAME-ID>',
  password: '<YOUR-PASSWORD',
  region: '<YOUR-REGION-ID>'
});

client.pipeableDownload({
  container: 'my-container',
  name: 'my-file'
}).pipe(fs.createWriteStream('test.png'));