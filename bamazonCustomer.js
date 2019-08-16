var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host     : "localhost",
    port: 3306,
    user     : "root",
    password : "root",
    database : "bamazon"
  });

connection.connect(function(err){
    if (err) throw err;
    items();
});

function items() {
    connection.query("SELECT * FROM products",function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++ ) {
            console.log("Item ID: " + res[i].item_id + "\n", "Product: " + res[i].product_name + "\n", "Price: " + res[i].price + "\n");
        }

        inquirer
            .prompt ([
                {
                     name: "choice",
                     type: "rawlist",
                     choices: function() {
                        var itemList = [];
                        for (var i = 0; i < res.length; i++) {
                            itemList.push(res[i].item_id);
                        }
                        return itemList;
                     },
                     message: "What is the item_id of the product you would like to buy?"
                },
                {
                name: "productUnits",
                type: "input",
                message: "How many units of this product do you wish to purchase?"
                }
            ])
            .then(function(answer){
                
                var pickedItem;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].item_id == answer.choice) {
                        pickedItem = res[i];
                        // return pickedItem;
                        console.log(pickedItem);
                    }
                }

                if (pickedItem.stock_quantity > answer.productUnits) {
                    console.log("here you go")
                    // items();
                } 
                
                else if (pickedItem.stock_quantity < answer.productUnits) {
                    console.log("Insufficient Quantity!");
                }
                
            })
    })
};
