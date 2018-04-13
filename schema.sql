DROP DATABASE IF EXISTS beatriz;
CREATE DATABASE beatriz;
USE beatriz;
CREATE TABLE info(
  id int NOT NULL AUTO_INCREMENT,
  fullName varchar(250) NOT NULL,
  email varchar(100) NOT NULL,
  phoneNumber varchar(250) NOT NULL,
  questions varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/
INSERT INTO info (fullName, email, phoneNumber, questions) VALUES ('Eduardo urrutia','eduardo@holacode.com','5567382929', 'Tienen mas variedades de packetes?');
INSERT INTO info (fullName, email, phoneNumber, questions) VALUES ('Luis avila','luis@holacode.com','4384388594904','Estuvo muy rica la comida');
INSERT INTO info (fullName, email, phoneNumber, questions) VALUES ('Javier elizalde','javier@holacode.com','4354355452432','Puedo mezclar los packetes');
INSERT INTO info (fullName, email, phoneNumber, questions) VALUES ('Marco castillo','marco@holacode.com','4524552354','que dias tienen disponibles?');

CREATE TABLE packages(
  id int NOT NULL AUTO_INCREMENT,
  description varchar(250) NOT NULL,
  price varchar(250) NOT NULL,
  PRIMARY KEY (ID)
  );

  INSERT INTO packages (description, price) VALUES ('Salón con pantalla para videos; solo con mesas, sillas, meseros, café y agua, galletas $100.00 por persona.','$100.00');
  INSERT INTO packages (description, price) VALUES ('Salón con pantalla para videos;  solo con mesas, sillas, meseros, café y agua, galletas, 5 canapés  $150.00 por persona.','$150.00');
  INSERT INTO packages (description, price) VALUES ('Salón con pantalla para videos; Desayuno primavera $198.00 por persona.','$198.00');
  INSERT INTO packages (description, price) VALUES ('Salón con pantalla para videos; Taquiza completa $ 235.00 con el lugar.','$235.00');
  INSERT INTO packages (description, price) VALUES ('Salón con pantalla para videos; Parrillada completa $ 245.00 con el lugar $ 270.00 parrillada especial, $ 290.00 cortes finos.','$270.00')
