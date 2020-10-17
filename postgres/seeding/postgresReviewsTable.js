//Bring in Dependencies
const db = require('../index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');

//Helper functions
const randomBool = () => {
  const num = Math.floor(Math.random() * 10);
  return num % 2 === 0
    ? true
    : false;
}

//Seeding function
const outer = async () => {
  const createReviewTableCSV = async () => {
    writer.pipe(fs.createWriteStream('ReviewTable.csv'));
    for (var i = 0; i < 100000; i++) {
      let res_id = i + 400001;
      console.log(res_id)
      if (i === 50 || i === 10000 || i === 90000 || i === 200000 || i === 300000 ) {
        console.log(`Seeded ${i} documents`);
      }
      for (var j = 0; j < ( 13 + Math.floor(Math.random() * 37)); j++) {
        let date = new Date();
        date = date.toString();
        writer.write({
          restaurant_id: res_id,
          user_id: (1 + Math.floor(Math.random() * 499999)),
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
    }
    writer.end();
    console.log('CSV Generated');
  }
  await createReviewTableCSV();
  db.query("COPY reviews_service.reviews (restuarant_id, user_id, create_date, description, rating_food, rating_service, rating_ambience, rating_overall, noise_level, would_recommend) FROM '/Users/pepe/pepe/HR/SDC/reviews-backend/ReviewTable.csv' DELIMITERS ',' CSV header;", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Query Completed');
      console.log(res);
    }
  })
}

outer();
