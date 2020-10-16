const { Database, aql } = require('arangojs');
const db = new Database();
//Collections
const users = db.collection('users');
const restaurant = db.collection('restaurant');
