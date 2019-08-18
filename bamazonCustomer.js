var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    items();
});

function items() {
    connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;

            console.table(res);

            inquirer
                .prompt([{
                        name: "pick",
                        type: "rawlist",
                        choices: function () {
                            var itemList = [];
                            for (var i = 0; i < res.length; i++) {
                                itemList.push(res[i].product_name);
                            }
                            return itemList;
                        },
                        message: "What is the product you would like to buy?"
                    },
                    {
                        name: "customerPurchase",
                        type: "input",
                        message: "How many units of this product do you wish to purchase?"
                    }
                ])
                .then(function (answer) {

                    if (isNaN(answer.customerPurchase)) {
                        console.log("Please enter a numerical value");

                        inquirer
                            .prompt({
                                name: "customerPurchase",
                                type: "input",
                                message: "How many units of this product do you wish to purchase?"
                            })
                    }

                    connection.query(
                        "SELECT * FROM products WHERE ?", {
                            product_name: answer.pick
                        },
                        function (err, res) {
                            if (err) throw err

                            var stock = res[0].stock_quantity;

                            var amountPurchased = answer.customerPurchase;

                            if (stock >= amountPurchased) {
                                var updateStock = stock - amountPurchased;

                                console.log("Purchase successful!")
                                console.log("There are now " + updateStock + " " + answer.pick + "s in stock");

                                connection.query(
                                    "UPDATE products SET ? WHERE ?", [{
                                            stock_quantity: updateStock
                                        },
                                        {
                                            product_name: answer.pick
                                        }
                                    ],
                                    function (err) {
                                        if (err) throw err;
                                    }
                                );

                            } else if (stock <= amountPurchased && !NaN) {
                                console.log("Insufficient Quantity")
                            } else {
                                connection.end()
                            }

                        },
                    );
                });
        }

    );
};