DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT(2) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price INT NOT NULL,
    stock_quantity INT(3) NOT NULL
);

USE bamazon;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar", "Music", 90, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wasteland, Baby!", "Music", 15, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Crockpot", "Kitchenware", 50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Comforter Set", "Home", 75, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tablet", "Electronics", 70, 22);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES     ("Go Pro Hero7", "Electronics", 400, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES     ("Harry Potter Boxset", "Books", 54, 54);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES     ("CANON iP110 Mobile Printer", "Office Supplies", 150, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES    ("Travel: Europe", "Books", 16, 30);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES     ("Dog Treats", "Pets", 7, 20);

SELECT * FROM products;