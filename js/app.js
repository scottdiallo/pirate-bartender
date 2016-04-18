var Order = function(orderValues) {
    // Pulls values from the DOM.
    this.strong = orderValues[0];
    this.salty = orderValues[1];
    this.bitter = orderValues[2];
    this.sweet = orderValues[3];
    this.fruity = orderValues[4];
};

var Drink = function(pantry, drinkOrder) {
    var ingredientNumber,
        ingredientsArray = [];

    for (var userPreference in drinkOrder) {
        ingredientNumber = Math.floor(Math.random() * 2);
        if (drinkOrder[userPreference]) {
            ingredientsArray.push(pantry[userPreference][ingredientNumber]);
        }
    }
    return ingredientsArray;

};

var drinkNamer = function(concoction){
    // use if statements to piece together name conditionally
    // based on the ingredts that comprise it
};

$(document).ready(function() {
    var concoction,
        pantry = {
            strong: ["rum", "whiskey", "gin"],
            salty: ["olive", "salt rim", "bacon"],
            bitter: ["bitters", "tonic", "lemon peel"],
            sweet: ["cola", "agave", "honey"],
            fruity: ["orange slice", "cassis", "cherry"]
        };

    $('form').on('submit', function(e) {
        orderValues = [];
        console.log(e);
        e.preventDefault();

        $('select').each(function() {
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        drinkOrder = new Order(orderValues); // create new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor
        alert(concoction);
        customerBeverage = drinkNamer(concoction); // name the customer's beverage with drinkNamer();
    });
});
