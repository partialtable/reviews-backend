const { Client } = require('pg');
const config = {
  database: 'reviews_service',
}
const client = new Client(config);

client.connect( (err) => {
  if (err) {
    console.log('Connection Err', err.stack);
  } else {
    console.log('Connected To Postgres');
  }
});

module.exports = client;