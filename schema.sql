DROP DATABASE IF EXISTS beatriz;

CREATE DATABASE beatriz;

USE beatriz;

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  reviews varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO reviews (title, reviews) VALUES ('Maravilloso!', 'La comida esta fabulosa unas de las mejores que e probado');
