SELECT orders.order_number, customer.name , customer.age , customer.products

from orders

INNER JOIN customer ON orders.personID = customer.id