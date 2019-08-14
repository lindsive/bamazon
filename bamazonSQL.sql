DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon

CREATE TABLE products (
    item_id INT(2) NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price INT NOT NULL,
    stock_quantity INT(3) NOT NULL
);