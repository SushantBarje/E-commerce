use ecommerce;
CREATE DATABASE ecommerce;

create table users(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`username` VARCHAR(50) NOT NULL,
`password` VARCHAR(255) NOT NULL,
`first_name` VARCHAR(30) NOT NULL,
`last_name` VARCHAR(30) NOT NULL
);

CREATE TABLE category(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
    `category_name` VARCHAR(20) NOT NULL
);

CREATE TABLE PRODUCTS (
	`product_id` INT PRIMARY KEY AUTO_INCREMENT,
    `product_name` VARCHAR(30) NOT NULL,
    `product_price` DECIMAL(6,2) NOT NULL,
    `product_brand` VARCHAR(20),
    `product_image` VARCHAR(255),
    `category_id` INT,
    CONSTRAINT fk_category FOREIGN KEY (`category_id`) REFERENCES  category(`id`) ON DELETE SET NULL ON UPDATE SET NULL
);

CREATE TABLE orders(
`order_id` INT PRIMARY KEY AUTO_INCREMENT,
`user` INT,
`product_id` INT,
`no_of_units` INT DEFAULT 0,
`creation_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
`status` ENUM('placed', 'delivered'),
`delivary_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_user FOREIGN KEY (`user`) REFERENCES users(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT fk_product_id FOREIGN KEY (`product_id`) REFERENCES products(`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO category VALUES(1,'Mobile Phones'); 

INSERT INTO users VALUES(1,'admin', 'admin', 'Sushant', 'Barje');
SELECt * FROM USERS;
update users set users.password = '$2y$10$V5ushMEECBgtqPk4cxV8PecQxk8eM002rF8eRq2YNWHwtJ3VNhLn2' where id = 1;

INSERT INTO products VALUES(1 , 'MI Y1', 8000.00, 'XIAOMI', './imag', 1); 
INSERT INTO products VALUES(2 , 'MI Y2', 9000.00, 'XIAOMI', './imag', 1); 

select * from orders;
desc orders;
