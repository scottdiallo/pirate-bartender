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

    for (var drinkIngredient in drinkOrder) {
        if (drinkIngredient) {
            ingredientNumber = Math.floor(Math.random() * 2);
            ingredientsArray.push(pantry[drinkIngredient][ingredientNumber]);
        }
    }
    return ingredientsArray;

};

var drinkNamer = function(concoction){
    // use if statements to piece together name conditionally
    // based on the ingredts that comprise it
}

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
        e.preventDefault();

        $('select').each(function() {
            // pushes DOM values to array,
            //uses ternary to convert them to boolean true or false
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        drinkOrder = new Order(orderValues); // create new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor
        customerBeverage = drinkNamer(concoction); // name the customer's beverage with drinkNamer();
    });
});
