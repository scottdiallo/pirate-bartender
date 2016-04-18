var Order = function(orderValues) {
    // Pulls values from the DOM.
    this.strong = orderValues[0];
    this.salty = orderValues[1];
    this.bitter = orderValues[2];
    this.sweet = orderValues[3];
    this.fruity = orderValues[4];
};

var Drink = function(pantry, drinkOrder) {
    // Will build the drink from the Order.
    // test if true for each drink property
    // then pull random pantry inredient for that prop if true
    // but IGNORE that type ingredient if false,
        var ingredientNumber,
        ingredientsArray = [];
for (var drinkIngredient in drinkOrder) {
    if (drinkIngredient) { // if type is true
        ingredientNumber = Math.floor(Math.random() * 2);
        $('main').append(pantry[drinkIngredient][ingredientNumber]);
        }
    }
};

$(document).ready(function() {
    var pantry = {
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

        drinkOrder = new Order(orderValues);
        customerBeverage = new Drink(pantry, drinkOrder);
    });
});
