CREATE TABLE customers(
  id INT not NULL,
  cus_name INT,
  cus_shopped STRING,
  cus_age INT,
  PRIMARY KEY(id)
  )



CREATE TABLE products(
  id INT NOT NULL,
  name  STRING,
  price MONEY,
  PRIMARY KEY(id)
  )




CREATE TABLE orders(
  id INT NOT NULL,
  order_Number INT,
  customer_ID INT,
  product_ID INT,
  PRIMARY KEY(id),
  FOREIGN KEY(customer_ID) REFERENCES customers(id),
  FOREIGN KEY (product_ID) REFERENCES products(id)
  )

