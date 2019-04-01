DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE articles (
  id int NOT NULL AUTO_INCREMENT,
  link varchar(150) NOT NULL,
  title varchar(150) NOT NULL,
  poster varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
