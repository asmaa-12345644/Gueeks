CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
    
);



select COUNT(*)
from actors;

INSERT INTO actors(first_name,last_name) VALUES
('Greg', 'Jones');

SELECT * FROM actors;