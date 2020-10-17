//Bring in Dependencies
const db = require('../index.js');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
const colors = require('colors');
//File Counter
let counter = 1;

//Helper functions
const generateRandomPhotoUrl = () => {
  let url = 'https://www.example.com/';
  let random = Math.floor(Math.random() * 1000);
  return url + random.toString();
}

//Seeding
const outer = async () => {
  const createUserTableCSV = async () => {
    writer.pipe(fs.createWriteStream(`UserTable${counter}.csv`));
    for (var i = 0; i < 500000; i++) {
      //Console Status
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
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        location: faker.address.city(),
        avatar_url: generateRandomPhotoUrl()
      });
    }
    console.log('CSV Generated, Please Allow 30 Seconds for CSV to onload...'.rainbow);
  }
  await createUserTableCSV();
  setTimeout(async () => {
    console.log('CSV Onloaded, Copying...'.rainbow)
    db.query(`COPY reviews_service.user (first_name, last_name, location, avatar_url) FROM '/Users/pepe/pepe/HR/SDC/reviews-backend/UserTable${counter}.csv' DELIMITERS ',' CSV header;`, async (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        await fs.unlink(`/Users/pepe/pepe/HR/SDC/reviews-backend/UserTable${counter}.csv`, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(`File Deleted @ ${counter}`.rainbow);
          }
        })
        //Change amount of docs here
        setTimeout(() => {
          if (counter <= 2) {
            console.log(`Seeded File [ ${counter} ] ^_^ Moving Onto next file... `.rainbow);
            counter++;
            outer();
          } else {
            console.log('User Table Seeding Completed! ^_^'.rainbow);
          }
        }, 15000)
      }
    });
  }, 45000);
}

outer();