/* Specify which database that we are going to use. */
USE burgers_db;

/* Burgers -  Insert needed data to burgers table */
INSERT INTO burgers (burger_name, devoured)
    VALUES ("Jucy Lucy", TRUE),
           ("Kimchi Burger", FALSE),
           ("Bacon Cheeseburger", FALSE),
           ("Angus Burger", TRUE);