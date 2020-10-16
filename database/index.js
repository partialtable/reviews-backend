/* eslint-disable no-console */
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getRestaurantRating = (id, callback) => {
  const q = `SELECT * FROM restaurants where id = ${id};`;
  connection.query(q, (err, data) => {
    if (err) {
      // console.log('error in MySQL select * from transactions query');
      callback(err);
    } else {
      // console.log('successful MySQL select * from transactions query');
      callback(null, data);
    }
  });
};

const getReviewList = (id, callback) => {
  const q = `SELECT * FROM review_list where id_restaurants = ${id};`;
  connection.query(q, (err, data) => {
    if (err) {
      // console.log('error in MySQL select * from transactions query');
      callback(err);
    } else {
      // console.log('successful MySQL select * from transactions query');
      callback(null, data);
    }
  });
};

const getAllUsers = (callback) => {
  const q = 'SELECT * FROM users';
  connection.query(q, (err, data) => {
    if (err) {
      // console.log('error in MySQL select * from transactions query');
      callback(err);
    } else {
      // console.log('successful MySQL select * from transactions query');
      callback(null, data);
    }
  });
};

module.exports = {
  connection,
  getRestaurantRating,
  getReviewList,
  getAllUsers,
};
