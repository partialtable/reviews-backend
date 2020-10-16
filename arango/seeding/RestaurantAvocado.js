//Bring in Dependencies
const fs = require('fs');
const csvWriter = require('csv-write-stream');
let writer = csvWriter();
const faker = require('faker');
let restaurant_id = 1;

//Helper Functions

const randomBool = (random = Math.floor(Math.random() * 10)) => random % 2 === 0 ? true : false;

const generateReviews = () => {
  let result = [];
  for (let i = 0; i < (13 + Math.floor(Math.random() * 47)); i++) {
    let date = new Date();
    let obj = {};
    obj.user_id = (1 + Math.floor(Math.random() * 9999));
    obj.create_date = date;
    obj.description = faker.lorem.paragraph();
    obj.rating_food = (Math.random() * 5).toFixed(2);
    obj.rating_service = (Math.random() * 5).toFixed(2);
    obj.rating_ambience = (Math.random() * 5).toFixed(2);
    obj.rating_overall = (Math.random() * 5).toFixed(2);
    obj.noise_level = faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']);
    obj.would_recommend = randomBool();
    result.push(obj);
  }
  return result;
}

const generateRandomArr = () => {
  return [randomBool(), randomBool(), randomBool(), randomBool()];
}

const createRestaurantReviewDocument = () => {
  writer.pipe(fs.createWriteStream('AvocadoRestaurant.csv'));
  for (var i = 0; i < 10000; i++) {
    const five = Math.random();
    const four = Math.random() * (1 - five);
    const three = Math.random() * (1 - (five + four));
    const two = Math.random() * (1 - (five + four + three));
    const one = Math.random() * (1 - (five + four + three + two));
    writer.write({
      _key: restaurant_id,
      restaurant_name: faker.company.companyName(),
      number_of_reviews: Math.floor(Math.random() * 400),
      food_overall_rating: (Math.random() * 5).toFixed(2),
      service_overall_rating: (Math.random() * 5).toFixed(2),
      ambiance_overall_rating: (Math.random() * 5).toFixed(2),
      overall_rating: (Math.random() * 5).toFixed(2),
      noise_level: faker.random.arrayElement(['do not recall', 'quiet', 'moderate', 'energetic']),
      one_star_percent: one.toFixed(2),
      two_star_percent: two.toFixed(2),
      three_star_percent: three.toFixed(2),
      four_star_percent: four.toFixed(2),
      five_star_percent: five.toFixed(2),
      loved_for_array: generateRandomArr(),
      filters_array: generateRandomArr(),
      reviews: generateReviews()
    });
    restaurant_id++;
  }
}

createRestaurantReviewDocument();