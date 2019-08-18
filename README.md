# Bamazon - CLI App

Bamazon is an Amazon-like storefront, and uses MySQL, JavaScript, and Node.js to create a Command Line Interface app. This app updates the stock quantity of products based on customer orders in the MySQL database.

### Option One: Customer Able to Purchase Product

__Step One:__ When the user calls "node bamazonCustomer.js", a table of Bamazon's products displays the item_id, product_name, department_name, price, and stock_quantity of the shops items.

![A table of Bamazon products with a question asking the user which item they would like to purchase. Underneath, the products instock are displayed](assets/images/stepOneBamazonCustomer.png?raw=true)

__Step 2:__ Once the user enters which product they wish to purchase, they are then prompted to put in how many units of the product they wish to purchase. If the amount they wish to purchase is less than what the store has in stock, the message "Purchase Successful". 

Also, the database with the new amount of products instock is updated, and that amount is logged to the terminal.

![Image of the prompt "How many units of this product do you wish to purchase?" is logged to the terminal.](assets/images/stepTwoBamazonCustomer.png?raw=true)



### Option Two: Customer Unable to Purchase Product

__Step One:__ When the user calls "node bamazonCustomer.js", a table of Bamazon's products displays the item_id, product_name, department_name, price, and stock_quantity of the shops items.

![A table of Bamazon products with a question asking the user which item they would like to purchase. Underneath, the products instock are displayed](assets/images/stepOneBamazonCustomer.png?raw=true)

__Step 2:__ Once the user enters which product they wish to purchase, they are then prompted to put the amount of units of the product they wish to buy. If this amount is greater than what the store has in stock, the message "Insufficient Quantity" is logged to the console.

![Image of the prompt "How many units of this product do you wish to purchase?" is logged to the terminal, along with message "Insufficient Quantity"](assets/images/stepTwoBamazonCustomer.png?raw=true)







