
CREATE TABLE items (
    id_items SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);


CREATE TABLE customers (
    id_customers SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);


INSERT INTO items(full_name, price) VALUES 
('Small Desk', 100),
('Large desk', 300),
('Fan', 80);




INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');


SELECT *
FROM items;

SELECT *
FROM items
WHERE price > 80;


SELECT *
FROM items
WHERE price < 300;

select *
from customers
WHERE last_name= 'Smith';

select *
from customers
WHERE last_name= 'Jones';


select *
from customers
WHERE first_name <> 'Scott';
