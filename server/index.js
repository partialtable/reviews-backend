/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/')));

app.get('/api/restaurants/:id', (req, res1) => {
  db.getRestaurantRating(req.params.id, (err, data) => {
    if (err) {
      // console.log('error in server get request');
      res1.status(400).send(err);
    } else {
      // console.log('successful server get request');
      res1.status(200).send(data);
    }
  });
});

app.get('/api/review_list/:id', (req, res2) => {
  db.getReviewList(req.params.id, (err, data) => {
    if (err) {
      // console.log('error in server get request');
      res2.status(400).send(err);
    } else {
      // console.log('successful server get request');
      res2.status(200).send(data);
    }
  });
});

app.get('/api/users', (req, res3) => {
  db.getAllUsers((err, data) => {
    if (err) {
      // console.log('error in server get request');
      res3.status(400).send(err);
    } else {
      // console.log('successful server get request');
      res3.status(200).send(data);
    }
  });
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});

module.exports = {
  server,
  app,
};
