const faker = require('faker');
const mysql = require('mysql');
// const moment = require('moment');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

// query for inserting data to MySQL database restaurants table
const q1 = 'INSERT INTO restaurants (name_of_restaurant,number_of_reviews, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, percent_five_star, percent_four_star, percent_three_star, percent_two_star, percent_one_star, loved_for, filters) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

for (let i = 0; i < 100; i += 1) {
  // random data generation functions
  const restName = faker.company.companyName();
  const reviewsNum = Math.floor(Math.random() * 100);
  const overall = (Math.random() * 5).toFixed(2);
  const recent = (Math.random() * 5).toFixed(2);
  const food = (Math.random() * 5).toFixed(2);
  const service = (Math.random() * 5).toFixed(2);
  const ambience = (Math.random() * 5).toFixed(2);
  const noise = faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']);
  const recommend = Math.floor(Math.random());
  const five = Math.random();
  const four = Math.random() * (1 - five);
  const three = Math.random() * (1 - (five + four));
  const two = Math.random() * (1 - (five + four + three));
  const one = Math.random() * (1 - (five + four + three + two));
  const love = faker.random.arrayElement(['Great for couples', 'Great night scene', 'Great for singles', 'Great for families', 'Great for brunch', 'Great for catching up']);
  const filters = faker.random.arrayElement(['breakfast', 'brunch', 'lunch', 'dinner', 'drinks', 'live music']);

  connection.query(q1, [restName, reviewsNum, overall,
    recent, food, service, ambience, noise, recommend,
    five, four, three, two, one, love, filters], (err) => {
    if (err) {
      throw err;
    }
  });
}

// query for inserting data to MySQL database users table
const q2 = 'INSERT INTO users (avatar, first_name, last_name, number_of_reviews, locale) VALUES (?, ?, ?, ?, ?)';

for (let i = 0; i < 100; i += 1) {
  // random data generation functions
  const selectAvatar = `https://mataeux.s3-us-west-1.amazonaws.com/avatars/${i}.jpg`;
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const randomNumReviews = Math.floor(Math.random() * 500);
  const randomLocation = faker.address.city();

  connection.query(q2, [selectAvatar, firstName, lastName, randomNumReviews, randomLocation], (err) => {
    if (err) {
      throw err;
    }
  });
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];

// query for inserting data to MySQL database reviews table
const q3 = 'INSERT INTO review_list (id_restaurants, avatar, first_name, last_name, number_of_reviews, locale, create_date_month, create_date_day, create_date_year, review_message, rating_overall, rating_recent, rating_food, rating_service, rating_ambience, noise_level, would_recommend, loved_for, filters) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

for (let i = 0; i < 2000; i += 1) {
  // random data generation functions
  const restId = Math.ceil(Math.random() * 100);
  // const userId = Math.ceil(Math.random() * 100);
  const randomNumber = Math.floor(Math.random() * 100);
  const selectAvatar = `https://mataeux.s3-us-west-1.amazonaws.com/avatars/${randomNumber}.jpg`;
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const randomNumReviews = Math.floor(Math.random() * 500);
  const randomLocation = faker.address.city();
  const randomDateMonth = months[Math.floor(Math.random() * 12)];
  const randomDateDay = `${Math.ceil(Math.random() * 28)}`;
  const randomDateYear = years[Math.floor(Math.random() * 11)];
  const randomMessage = faker.lorem.paragraph();
  const overall = (Math.random() * (5 - 1) + 1);
  const recent = (Math.random() * (5 - 1) + 1);
  const food = (Math.random() * (5 - 1) + 1);
  const service = (Math.random() * (5 - 1) + 1);
  const ambience = (Math.random() * (5 - 1) + 1);
  const noise = faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']);
  const recommend = Math.floor(Math.random());
  const love = faker.random.arrayElement(['Great for couples', 'Great night scene', 'Great for singles', 'Great for families', 'Great for brunch', 'Great for catching up']);
  const filters = faker.random.arrayElement(['breakfast', 'brunch', 'lunch', 'dinner', 'drinks', 'live music']);

  connection.query(q3, [restId, selectAvatar, firstName, lastName, randomNumReviews, randomLocation, randomDateMonth, randomDateDay, randomDateYear, randomMessage, overall, recent, food, service, ambience, noise, recommend, love, filters], (err) => {
    if (err) {
      throw err;
    }
  });
}
