DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

USE test;

CREATE TABLE articles (
  id int NOT NULL AUTO_INCREMENT,
  link varchar(300) NOT NULL,
  title varchar(300) NOT NULL,
  username varchar(150) NOT NULL,
  category varchar(150) NOT NULL,
  description varchar(500) NOT NULL,
  upvotes int NOT NULL default 0,
  downvotes int NOT NULL default 0,
  PRIMARY KEY (ID)
);

CREATE TABLE comments (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(150) NOT NULL,
  text varchar(500) NOT NULL,
  upvotes int NOT NULL default 0,
  downvotes int NOT NULL default 0,
  article_id int NOT NULL, 
  PRIMARY KEY (id), 
  FOREIGN KEY (article_id) REFERENCES articles(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
