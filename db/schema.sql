/* Delete the database if there is database called burgers_db before creating it. */
DROP DATABASE IF EXISTS burgers_db;

/* Create the database burgers_db. */
CREATE DATABASE burgers_db;

/* Specify which database that we are going to use. */
USE burgers_db;

/* Burgers Table */
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id) 
);