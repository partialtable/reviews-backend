DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE restaurants (
  id int NOT NULL AUTO_INCREMENT,
  name_of_restaurant varchar(50),
  number_of_reviews int,
  rating_overall decimal(2, 1),
  rating_recent decimal(2, 1),
  rating_food decimal(2, 1),
  rating_service decimal(2, 1),
  rating_ambience decimal(2, 1),
  noise_level varchar(20),
  would_recommend decimal(3, 2),
  percent_five_star decimal(3, 2),
  percent_four_star decimal(3, 2),
  percent_three_star decimal(3, 2),
  percent_two_star decimal(3, 2),
  percent_one_star decimal(3, 2),
  loved_for varchar(100),
  filters varchar(100),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews smallint,
  locale varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE review_list (
  id int NOT NULL AUTO_INCREMENT,
  id_restaurants int,
  avatar varchar(100),
  first_name varchar(20),
  last_name varchar(20),
  number_of_reviews smallint,
  locale varchar(50),
  create_date_month varchar(50),
  create_date_day varchar(50),
  create_date_year varchar(50),
  review_message varchar(1000),
  rating_overall tinyint,
  rating_recent tinyint,
  rating_food tinyint,
  rating_service tinyint,
  rating_ambience tinyint,
  noise_level varchar(20),
  would_recommend tinyint,
  loved_for varchar(150),
  filters varchar(150),
  PRIMARY KEY (id),
  FOREIGN KEY (id_restaurants)
    REFERENCES restaurants(id)
);