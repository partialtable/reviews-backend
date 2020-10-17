//Bring in Dependencies
const db = require('../index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
//Res_id
let res_id = 1;
let file_id = 1;

//Helper functions
const randomBool = () => {
  const num = Math.floor(Math.random() * 10);
  return num % 2 === 0
    ? true
    : false;
}

const main = async () => {
  const createSmolReviews = async () => {
    writer.pipe(fs.createWriteStream(`ReviewTable${file_id}.csv`));
    for (var i = 0; i < 10000; i++) {
      if (i === 9999) {
        console.log(`Seed @ ${i} Complete ::: Total ${res_id}`);
      }
      for (var j = 0; j < (13 + Math.floor(Math.random() * 37)); j++) {
        let date = new Date();
        date = date.toString();
        writer.write({
          restaurant_id: res_id,
          user_id: (1 + Math.floor(Math.random() * 999999)),
          create_date: date,
          description: faker.lorem.paragraph(),
          rating_food: (Math.random() * 5).toFixed(2),
          rating_service: (Math.random() * 5).toFixed(2),
          rating_ambience: (Math.random() * 5).toFixed(2),
          rating_overall: (Math.random() * 5).toFixed(2),
          noise_level: faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']),
          would_recommend: randomBool().toString()
        });
      }
      res_id++;
    }
  }
  await createSmolReviews();
  setTimeout(() => {
    db.query(`COPY reviews_service.reviews (restuarant_id, user_id, create_date, description, rating_food, rating_service, rating_ambience, rating_overall, noise_level, would_recommend) FROM '/Users/pepe/pepe/HR/SDC/reviews-backend/ReviewTable${file_id}.csv' DELIMITERS ',' CSV header;`, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Query Completed');
        console.log(res);
        file_id++;
        if (res_id <= 5000000) {
          setTimeout(() => {
            main();
          }, 10000);
        }
      }
    });
  }, 45000);
}

main();


