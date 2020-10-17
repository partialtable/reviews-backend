# Project Name

> SDC | partialtable | reviews-component

## Table of Contents

1. CRUD/API Schema
2. Data Schema SQL
3. Data Schema noSQL
4. Setup Postgres On New Client
5. Setup Arango On New Client

## CRUD/API Usage

> How to use the API

### READ [ GET ]

### Get A Specific Review
  * GET `api/restaurant/:{restaurant_id}/reviews/:{review_id}`

**Path Parameters:**
  * `restaurant_id` | Restaurant ID
  * `review_id` | Review ID

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "restaurant_id" : "Integer",
      "user_id" : "Integer",
      "review_id" : "Integer",
      "create_date" : "Date(UTC)",
      "description" : "String",
      "rating_food" : "Integer",
      "rating_service" : "Integer",
      "rating_ambience" : "Integer",
      "rating_overall" : "Integer",
      "noise_level" : "String",
      "would_recommend" : "Bool",
    }
```

### Get All Reviews for a specific restaurant
  * GET `api/restaurant/:{restaurant_id}/reviews`

**Path Parameters:**
  * `restaurant_id` | Restaurant ID

**Success Status Code:** `200`

**Returns:** JSON X Num Of Reviews
```json
    [
      {
        "restaurant_id" : "Integer",
        "user_id" : "Integer",
        "review_id" : "Integer",
        "create_date" : "Date(UTC)",
        "description" : "String",
        "rating_food" : "Integer",
        "rating_service" : "Integer",
        "rating_ambience" : "Integer",
        "rating_overall" : "Integer",
        "noise_level" : "String",
        "would_recommend" : "Bool",
      },
      {
        "restaurant_id" : "Integer",
        "user_id" : "Integer",
        "review_id" : "Integer",
        "create_date" : "Date(UTC)",
        "description" : "String",
        "rating_food" : "Integer",
        "rating_service" : "Integer",
        "rating_ambience" : "Integer",
        "rating_overall" : "Integer",
        "noise_level" : "String",
        "would_recommend" : "Bool",
      }
    ]
```

### Get A Specific Resturant's Data
  * GET `api/restaurant/:{restaurant_id}`

**Path Parameters:**
  * `restaurant_id` | Restaurant ID

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "restaurant_name" : "String",
      "number_of_reviews" : "Integer",
      "food_overall_rating" : "Integer",
      "service_overall_rating" : "Integer",
      "ambiance_overall_rating" : "Integer",
      "overall_rating" : "Integer",
      "noise_level" : "String",
      "one_star_percent" : "Integer",
      "two_star_percent" : "Integer",
      "three_star_percent" : "Integer",
      "four_star_percent" : "Integer",
      "five_star_percent" : "Integer",
      "loved_for" : [
        "most_booked",
        "great_for_dinner",
        "great_for_lunch",
        "great_for_breakfast"
      ],
      "filters" : [
        "open_early",
        "open_late",
        "good_for_singles",
        "bar_seating"
      ]
    }
```

### Get All Resturant Data
  * GET `api/restaurant`

**Path Parameters:**
  * N/A

**Success Status Code:** `200`

**Returns:** JSON (X Num of resturants)
```json
    [
      {
        "restaurant_name" : "String",
        "number_of_reviews" : "Integer",
        "food_overall_rating" : "Integer",
        "service_overall_rating" : "Integer",
        "ambiance_overall_rating" : "Integer",
        "overall_rating" : "Integer",
        "noise_level" : "String",
        "one_star_percent" : "Integer",
        "two_star_percent" : "Integer",
        "three_star_percent" : "Integer",
        "four_star_percent" : "Integer",
        "five_star_percent" : "Integer",
        "loved_for" : [
          "most_booked",
          "great_for_dinner",
          "great_for_lunch",
          "great_for_breakfast"
        ],
        "filters" : [
          "open_early",
          "open_late",
          "good_for_singles",
          "bar_seating"
        ]
      },
      {
        "restaurant_name" : "String",
        "number_of_reviews" : "Integer",
        "food_overall_rating" : "Integer",
        "service_overall_rating" : "Integer",
        "ambiance_overall_rating" : "Integer",
        "overall_rating" : "Integer",
        "noise_level" : "String",
        "one_star_percent" : "Integer",
        "two_star_percent" : "Integer",
        "three_star_percent" : "Integer",
        "four_star_percent" : "Integer",
        "five_star_percent" : "Integer",
        "loved_for" : [
          "most_booked",
          "great_for_dinner",
          "great_for_lunch",
          "great_for_breakfast"
        ],
        "filters" : [
          "open_early",
          "open_late",
          "good_for_singles",
          "bar_seating"
        ]
      }
    ]
```
### Get A Specific User's Data
  * GET `api/users/:{user_id}`

**Path Parameters:**
  * `user_id` | User's ID

**Success Status Code:** `200`

**Returns:** JSON
```json
    {
      "first_name" : "String",
      "last_name" : "String",
      "location" : "String",
      "avatar" : "String"
    }
```

### Get All User's Data
  * GET `api/users/`

**Path Parameters:**
  * N/A

**Success Status Code:** `200`

**Returns:** JSON
```json
    [
      {
        "first_name" : "String",
        "last_name" : "String",
        "location" : "String",
        "avatar" : "String"
      },
      {
        "first_name" : "String",
        "last_name" : "String",
        "location" : "String",
        "avatar" : "String"
      }
    ]
```

### CREATE [ POST ]

### Create A Review
  * POST `api/restaurant/:{restaurant_id}/reviews`

**Path Parameters:**
  * `restaurant_id` | Restaurant ID

**Success Status Code:** `201`

**Req Body(JSON)**
```json
    {
      "restaurant_id" : "Integer",
      "user_id" : "Integer",
      "review_id" : "Integer",
      "create_date" : "Date(UTC)",
      "description" : "String",
      "rating_food" : "Integer",
      "rating_service" : "Integer",
      "rating_ambience" : "Integer",
      "rating_overall" : "Integer",
      "noise_level" : "String",
      "would_recommend" : "Bool",
    }
```

### Create A Resturant
  * POST `api/restaurant`

**Path Parameters:**
  * N/A

**Success Status Code:** `201`

**Req Body(JSON)**
```json
    {
      "restaurant_name" : "String",
      "number_of_reviews" : "Integer",
      "food_overall_rating" : "Integer",
      "service_overall_rating" : "Integer",
      "ambiance_overall_rating" : "Integer",
      "overall_rating" : "Integer",
      "noise_level" : "String",
      "one_star_percent" : "Integer",
      "two_star_percent" : "Integer",
      "three_star_percent" : "Integer",
      "four_star_percent" : "Integer",
      "five_star_percent" : "Integer",
      "loved_for" : [
        "most_booked",
        "great_for_dinner",
        "great_for_lunch",
        "great_for_breakfast"
      ],
      "filters" : [
        "open_early",
        "open_late",
        "good_for_singles",
        "bar_seating"
      ]
    }
```

### Create A User
  * POST `api/users`

**Path Parameters:**
  * N/A

**Success Status Code:** `201`

**Req Body(JSON)**
```json
    {
      "first_name" : "String",
      "last_name" : "String",
      "location" : "String",
      "avatar" : "String"
    }
```

### UPDATE [ PUT ]

### Update A Specific Review
  * PUT `api/restaurant/:{restaurant_id}/reviews/:{review_id}`

**Path Parameters:**
  * `restaurant_id` Restaurant ID
  * `review_id` Review ID

**Success Status Code:** `201`

**Req Body(JSON)** Any of the following keys
```json
    {
      "first_name" : "String",
      "last_name" : "String",
      "location" : "String",
      "avatar" : "String"
    }
```

### Update A Specific Restaurant's Data
  * PUT `api/restaurant/:{restaurant_id}`

**Path Parameters:**
  * `restaurant_id` Restaurant ID

**Success Status Code:** `201`

**Req Body(JSON)** Any of the following keys
```json
    {
      "restaurant_name" : "String",
      "number_of_reviews" : "Integer",
      "food_overall_rating" : "Integer",
      "service_overall_rating" : "Integer",
      "ambiance_overall_rating" : "Integer",
      "overall_rating" : "Integer",
      "noise_level" : "String",
      "one_star_percent" : "Integer",
      "two_star_percent" : "Integer",
      "three_star_percent" : "Integer",
      "four_star_percent" : "Integer",
      "five_star_percent" : "Integer",
      "loved_for" : [
        "most_booked",
        "great_for_dinner",
        "great_for_lunch",
        "great_for_breakfast"
      ],
      "filters" : [
        "open_early",
        "open_late",
        "good_for_singles",
        "bar_seating"
      ]
    }
```

### Update A Specific User's Data
  * PUT `api/users/:{user_id}`

**Path Parameters:**
  * `user_id` User ID

**Success Status Code:** `201`

**Req Body(JSON)** Any of the following keys
```json
    {
      "first_name" : "String",
      "last_name" : "String",
      "location" : "String",
      "avatar" : "String"
    }
```

### DELETE [ DELETE ]

### Delete A Specific Review
  * DELETE `api/restaurant/:{restaurant_id}/reviews/:{review_id}`

**Path Parameters:**
  * `restaurant_id` Restaurant ID
  * `review_id` Review ID

**Success Status Code:** `204`

### Delete A Specific Restaurant
  * DELETE `api/restaurant/:{restaurant_id}`

**Path Parameters:**
  * `restaurant_id` Restaurant ID

**Success Status Code:** `204`

### Delete A Specific User
  * DELETE `api/users/:{user_id}`

**Path Parameters:**
  * `user_id` User ID

**Success Status Code:** `204`


### Postgres Schema
> https://drive.google.com/file/d/1W4pYr576JnZ1fGnHb-Epy5nHb9AEFzoV/view?usp=sharing

### Arango Schema | Document Orientated
> https://drive.google.com/file/d/1W09TmoVWVerEpRorfIEbg4AZ5j-DF_MA/view?usp=sharing

### 4. Set up Postgres on a new Machine
> Please run the commands in the following order!

> Note the 3rd command path is not verified. (All CSV Will be in root folder of the project)

 * 1 In Bash/Zsh | `npm run init-postgres`
 * 2 In Bash/Zsh | `npm run start-postgres`
 * 3 In Bash/Zsh | `psql -d reviews_service -a -f $(pwd)/postgres/postgres.sql `
 * 4 In Bash/Zsh | `npm run create-csv-restaurant`
 * 5 In Bash/Zsh | `npm run create-csv-users`
 * 6 In Bash/Zsh | `npm run create-csv-reviews`

 ### 5. Set up Postgres on a new Machine
 > Please run the commands in the following order!

 >note the 3rd command path is not verified (All CSV Will be in root folder of the project)

 * 1 In Bash/Zsh | `npm run create-csv-avocado-user`
 * 2 In Bash/Zsh | `npm run create-csv-avocado-res`
 * 3 In Bash/Zsh | `arangoimport --file "AvocadoUser.csv" --type csv --collection "colName" --server.database dbName`
 * 4 In Bash/Zsh | `arangoimport --file "AvocadoRestaurant.csv" --type csv --collection "colName" --server.database dbName`