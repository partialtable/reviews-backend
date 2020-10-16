const { Client } = require('pg');
const client = new Client({ database: 'template1'});

client.connect( (err) => {
  if (err) {
    console.log('Connection Err', err.stack);
  } else {
    console.log('Connected To Postgres');
  }
});
//Init our DB reviews_service
client.query("CREATE DATABASE reviews_service;", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Created DB');
    console.log(res);
  }
});

