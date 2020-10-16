//Bring in Dependencies
const db = require('../postgres/index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
//Init counter
let restaurant_id = 1;

//Helper functions
const generateRandomPhotoUrl = () => {
  let url = 'https://www.example.com/';
  let random = Math.floor(Math.random() * 1000);
  return url + random.toString();
}

//Seeding
const outer = async () => {
  const createUserTableCSV = async () => {
    writer.pipe(fs.createWriteStream('UserTable.csv'));
    for (var i = 0; i < 10000; i++) {
      if ( i === 50 || i === 500000 || i === 1000000 || i === 5000000 ) {
        console.log(`Seeded ${i} Records`);
      }
      writer.write({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        location: faker.address.city(),
        avatar_url: generateRandomPhotoUrl()
      });
      restaurant_id++;
    }
    writer.end();
    console.log('CSV Generated');
  }
  await createUserTableCSV();
  db.query("COPY reviews_service.user (first_name, last_name, location, avatar_url) FROM '/Users/pepe/pepe/HR/SDC/reviews-service/UserTable.csv' DELIMITERS ',' CSV header;", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Query Completed');
      console.log(res);
    }
  });
}

outer();