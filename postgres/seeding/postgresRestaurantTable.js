//Bring in Dependencies
const db = require('../index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
const colors = require('colors');
//Init counter
let counter = 1;

//Helper functions
const randomBool = (num = Math.floor(Math.random() * 10)) => num % 2 === 0 ? true : false; 

const generateRandomArr = () => {  return [randomBool(), randomBool(), randomBool(), randomBool()]; }

const five = (Math.random());
const four = (Math.random() * (1 - five));
const three = (Math.random() * (1 - (five + four)));
const two = (Math.random() * (1 - (five + four + three)));
const one = (Math.random() * (1 - (five + four + three + two)));

const main = async () => {
  const createRestaurantCSV = async () => {
    writer.pipe(fs.createWriteStream(`RestaurantTable${counter}.csv`));
    for (var i = 0; i < 500000; i++) {
      if (i === 0) {console.log(`Seeding @ File # [ ${counter} ] Beginning! ^_^`.rainbow)}
      if (i === 50) { console.log(`[#________]`.rainbow) }
      else if (i === 500) { console.log(`[##_______]`.rainbow) }
      else if (i === 5000) { console.log(`[###______]`.rainbow) }
      else if (i === 50000) { console.log(`[####_____]`.rainbow) }
      else if (i === 100000) { console.log(`[#####____]`.rainbow) }
      else if (i === 200000) { console.log(`[######___]`.rainbow) }
      else if (i === 300000) { console.log(`[#######__]`.rainbow) }
      else if (i === 400000) { console.log(`[########_]`.rainbow) }
      else if (i === 499999) { console.log(`[#########]`.rainbow) }
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
    }
    console.log('CSV Generated, Please Allow 30 Seconds for CSV to onload...'.rainbow);
  }
  await createRestaurantCSV();
  setTimeout(async () => {
    console.log('CSV Onloaded, Copying...'.rainbow);
    db.query(`COPY reviews_service.restuarant (restuarant_name, number_of_reviews, food_overall_rating, service_overall_rating, ambiance_overall_rating, overall_rating, noise_level, one_star_percent, two_star_percent, three_star_percent, four_star_percent, five_star_percent, loved_for_array, filters_array) FROM '/Users/pepe/pepe/HR/SDC/reviews-backend/RestaurantTable${counter}.csv' DELIMITERS ',' CSV header;`, async (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Complete'.rainbow);
        console.log(res);
        await fs.unlink(`/Users/pepe/pepe/HR/SDC/reviews-backend/RestaurantTable${counter}.csv`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`File Deleted @ ${counter}`.rainbow);
          }
        })
        setTimeout(() => {
          if (counter <= 19) {
            console.log(`Seeded File [ ${counter} ] ^_^ Moving Onto next file... `.rainbow)
            counter++;
            main();
          } else {
            console.log('Restuarant Table Seeding Completed! ^_^'.rainbow)
          }
        }, 15000)
      }
    });
  }, 45000)
}

main();