--- 22-03-2021 01:37:37
--- SQLite
create table products(
  id INT NOT NULL,
  name  STRING,
  price MONEY,
  PRIMARY KEY(id)
  );

--- 22-03-2021 01:39:22
--- SQLite
/***** ERROR ******
near "VALUES": syntax error
 ----- 
insert INTO products
VALUES(1, "Laptop", 40000)
VALUES(2, "Mouse", 1000)
VALUES(3, "LED" , 2500);
*****/

--- 22-03-2021 01:39:32
--- SQLite
insert INTO products
VALUES(1, "Laptop", 40000);

--- 22-03-2021 01:39:46
--- SQLite
/***** ERROR ******
UNIQUE constraint failed: products.id
 ----- 
insert INTO products
VALUES(1, "Mouse", 1000);
*****/

--- 22-03-2021 01:39:52
--- SQLite
insert INTO products
VALUES(2, "Mouse", 1000);

--- 22-03-2021 01:40:10
--- SQLite
insert INTO products
VALUES(3, "LED", 2500);

--- 22-03-2021 01:40:27
--- SQLite
insert INTO products
VALUES(4, "Keyboard", 1200);

--- 22-03-2021 01:45:34
--- SQLite
/***** ERROR ******
near ".": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES products.id
  );
*****/

--- 22-03-2021 01:46:29
--- SQLite
/***** ERROR ******
near ".": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES products.id
  );
*****/

--- 22-03-2021 01:47:01
--- SQLite
/***** ERROR ******
near ".": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES products.id
  );
*****/

--- 22-03-2021 01:47:53
--- SQLite
/***** ERROR ******
near ".": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES products.id
  );
*****/

--- 22-03-2021 01:48:13
--- SQLite
/***** ERROR ******
near "(": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES (products.id)
  );
*****/

--- 22-03-2021 01:48:39
--- SQLite
/***** ERROR ******
unrecognized token: "{"
 ----- 
CREATE TABLE orders{
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES (products.id)
  };
*****/

--- 22-03-2021 01:48:54
--- SQLite
/***** ERROR ******
near "(": syntax error
 ----- 
CREATE TABLE orders(
  id INT not NULL,
  order_number INT,
  customer_ID int,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY (product_ID) REFERENCES (products.id)
  );
*****/

--- 22-03-2021 01:51:43
--- SQLite
DELETE FROM demo;

--- 22-03-2021 01:53:26
--- SQLite
/***** ERROR ******
near ")": syntax error
 ----- 
CREATE TABLE customers(
  id INT not NULL,
  cus_name INT,
  cus_shopped STRING,
  cus_age INT,
  PRIMARY KEY(id),
  );
*****/

--- 22-03-2021 01:53:34
--- SQLite
CREATE TABLE customers(
  id INT not NULL,
  cus_name INT,
  cus_shopped STRING,
  cus_age INT,
  PRIMARY KEY(id)
  );

--- 22-03-2021 01:54:46
--- SQLite
insert into customers
VALUES (1,"Areeb", "Mouse", 20);

--- 22-03-2021 01:55:13
--- SQLite
insert into customers
VALUES (2,"Anas", "Keyboard", 18);

--- 22-03-2021 01:55:33
--- SQLite
insert into customers
VALUES (3,"Osama", "LED", 24);

--- 22-03-2021 01:55:42
--- SQLite
DELETE FROM demo;

--- 22-03-2021 02:00:18
--- SQLite
/***** ERROR ******
near "NOTNULL": syntax error
 ----- 
CREATE TABLE orders(
  id INT NOTNULL,
  order_Number INT,
  customer_ID INT,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_ID) REFERENCES customers(id),
  FOREIGN KEY (product_ID) REFERENCES products(id)
  );
*****/

--- 22-03-2021 02:00:27
--- SQLite
CREATE TABLE orders(
  id INT NOT NULL,
  order_Number INT,
  customer_ID INT,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_ID) REFERENCES customers(id),
  FOREIGN KEY (product_ID) REFERENCES products(id)
  );

--- 22-03-2021 02:00:34
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:02:27
--- SQLite
/***** ERROR ******
table orders already exists
 ----- 
CREATE TABLE orders(
  id INT NOT NULL,
  order_Number INT,
  customer_ID INT,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_ID) REFERENCES customers(id),
  FOREIGN KEY (product_ID) REFERENCES products(id)
  );
*****/

--- 22-03-2021 02:04:02
--- SQLite
INSERT INTO orders
VALUES(2, 12321, 4324, 2);

--- 22-03-2021 02:04:10
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:04:26
--- Schema orders
SELECT * FROM orders;

--- 22-03-2021 02:09:10
--- Schema orders
/***** ERROR ******
no such table: customer_id
 ----- 
SELECT orders.order_number, customers.cus_name, customers.cus_shopped, orders.customer_ID

FROM orders

INNER JOIN customer_id ON orders.customer_id = customers.id;
*****/

--- 22-03-2021 02:09:45
--- Schema orders
/***** ERROR ******
no such table: customer_id
 ----- 
SELECT orders.order_number, customers.cus_name, customers.cus_shopped, orders.customer_ID

FROM orders

INNER JOIN customer_id ON orders.customer_ID = customers.id;
*****/

--- 22-03-2021 02:09:55
--- Schema orders
/***** ERROR ******
no such table: customer_ID
 ----- 
SELECT orders.order_number, customers.cus_name, customers.cus_shopped, orders.customer_ID

FROM orders

INNER JOIN customer_ID ON orders.customer_ID = customers.id;
*****/

--- 22-03-2021 02:10:24
--- Schema orders
SELECT orders.order_number, customers.cus_name, customers.cus_shopped, orders.customer_ID

FROM orders

INNER JOIN customers ON orders.customer_ID = customers.id;

--- 22-03-2021 02:10:57
--- Schema orders
SELECT * FROM orders;

--- 22-03-2021 02:11:10
--- Schema orders
SELECT * FROM customers;

--- 22-03-2021 02:11:27
--- Schema orders
/***** ERROR ******
no such table: customer_ID
 ----- 
SELECT orders.order_number, customers.cus_name, customers.cus_shopped, orders.customer_ID

FROM orders

INNER JOIN customer_ID ON orders.customer_ID = customers.id;
*****/

--- 22-03-2021 02:12:02
--- Schema orders
SELECT * FROM orders;

--- 22-03-2021 02:12:18
--- Schema orders
SELECT * FROM products;

--- 22-03-2021 02:12:22
--- Schema orders
SELECT * FROM demo;

--- 22-03-2021 02:12:27
--- Schema orders
SELECT * FROM orders;

--- 22-03-2021 02:12:32
--- Schema orders
SELECT * FROM customers;

--- 22-03-2021 02:14:23
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:17:14
--- SQLite
SELECT orders.order_Number, products.name, products.price

from orders

INNER JOIN products ON orders.product_id = products.id;

--- 22-03-2021 02:19:29
--- SQLite
SELECT * FROM customers;

--- 22-03-2021 02:19:33
--- SQLite
SELECT * FROM customers;

--- 22-03-2021 02:20:10
--- SQLite
SELECT * FROM orders;

--- 22-03-2021 02:20:14
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:20:21
--- Schema orders
SELECT * FROM orders;

--- 22-03-2021 02:20:34
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:20:53
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'products' AND type LIKE 'table';

--- 22-03-2021 02:21:22
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'customers' AND type LIKE 'table';

--- 22-03-2021 02:22:38
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'customers' AND type LIKE 'table';

--- 22-03-2021 02:23:27
--- Schema customers
SELECT * FROM orders;

--- 22-03-2021 02:24:06
--- SQLite
SELECT * FROM orders;

--- 22-03-2021 02:24:29
--- SQLite
SELECT * FROM products;

--- 22-03-2021 02:26:09
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'orders' AND type LIKE 'table';

--- 22-03-2021 02:27:01
SELECT `sql` FROM `sqlite_master` WHERE name LIKE 'products' AND type LIKE 'table';

