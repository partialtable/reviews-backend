//Bring in Dependencies
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');


//Helper functions
const generateRandomPhotoUrl = () => {
  let url = 'https://www.example.com/';
  let random = Math.floor(Math.random() * 1000);
  return url + random.toString();
}

//Create CSV
const createUserDocumentCSV = () => {
  writer.pipe(fs.createWriteStream('AvocadoUser.csv'));
  for (var i = 0; i < 10000; i++) {
    if ( i === 50 || i === 500000 || i === 1000000 || i === 5000000 ) {
      console.log(`Seeded ${i} Records`);
    }
    writer.write({
      _key: i + 1,
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      location: faker.address.city(),
      avatar_url: generateRandomPhotoUrl()
    });
  }
  writer.end();
  console.log('CSV Generated');
}

createUserDocumentCSV();