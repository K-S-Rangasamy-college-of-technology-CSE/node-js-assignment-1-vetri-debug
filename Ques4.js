//4.DNS Module

const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
    if (err) console.error(err);
    console.log('IP Address:', address);
    console.log('Address Family:', family);
});

