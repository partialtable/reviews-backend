//Bring in Dependencies
const db = require('../postgres/index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
//Init counter
let restaurant_id = 1;

//Helper functions
const randomBool = () => {
  const num = Math.floor(Math.random() * 10);
  return num % 2 === 0
    ? true
    : false;
}

const generateRandomArr = () => {
  return [randomBool(), randomBool(), randomBool(), randomBool()];
}

//Seeding function
const outer = async () => {
  const createRestaurantTableCSV = async () => {
    writer.pipe(fs.createWriteStream('RestaurantTable.csv'));
    for (var i = 0; i < 10000; i++) {
      if ( i === 50 || i === 500000 || i === 1000000 || i === 5000000 ) {
        console.log(`Seeded ${i} Records`);
      }
      const five = Math.random();
      const four = Math.random() * (1 - five);
      const three = Math.random() * (1 - (five + four));
      const two = Math.random() * (1 - (five + four + three));
      const one = Math.random() * (1 - (five + four + three + two));
      writer.write({
        restuarant_name: faker.company.companyName(),
        number_of_reviews: Math.floor(Math.random() * 400),
        food_overall_rating: (Math.random() * 5).toFixed(2),
        service_overall_rating: (Math.random() * 5).toFixed(2),
        ambiance_overall_rating: (Math.random() * 5).toFixed(2),
        overall_rating: (Math.random() * 5).toFixed(2),
        noise_level: faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']),
        one_star_percent: one,
        two_star_percent: two,
        three_star_percent: three,
        four_star_percent: four,
        five_star_percent: five,
        loved_for_array: '{' + generateRandomArr().join(',').toString() + '}',
        filters_array: '{' + generateRandomArr().join(',').toString() + '}'
      });
      restaurant_id++;
    }
    writer.end();
    console.log('CSV Generated');
  }
  await createRestaurantTableCSV();
  db.query("COPY reviews_service.restuarant (restuarant_name, number_of_reviews, food_overall_rating, service_overall_rating, ambiance_overall_rating, overall_rating, noise_level, one_star_percent, two_star_percent, three_star_percent, four_star_percent, five_star_percent, loved_for_array, filters_array) FROM '/Users/pepe/pepe/HR/SDC/reviews-service/RestaurantTable.csv' DELIMITERS ',' CSV header;", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
    }
  });
}
outer();