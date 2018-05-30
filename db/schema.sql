CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL default 0, 
PRIMARY KEY (id)
);

drop table burgers_db; 