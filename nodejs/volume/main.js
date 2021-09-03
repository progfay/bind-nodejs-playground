const { Resolver } = require("dns");
const resolver = new Resolver();

// comment out if you want to request from outside of container
// const DNS_SERVER_ADDRESS = "127.0.0.1:53";
// resolver.setServers([DNS_SERVER_ADDRESS]);

resolver.resolve4("test.com", (err, addresses) => {
  console.log(addresses);
  if (err) console.error(err);
});
