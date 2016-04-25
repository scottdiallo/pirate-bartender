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
// formula to generate random drink based on user selection
    for (var userPreference in drinkOrder) {
        ingredientNumber = Math.floor(Math.random() * 2);
        if (drinkOrder[userPreference]) {
            ingredientsArray.push(pantry[userPreference][ingredientNumber]);
        }
    }
    return ingredientsArray; // return back the drink made by random generator

};

var drinkNamer = function(concoction){
    // use if statements to piece together name conditionally
    // based on the ingredients that comprise it
};

$(document).ready(function() {
    // created an object with property that stored values in arrays.
    var concoction,
        pantry = {
            strong: ["rum", "whiskey", "gin"], // if user say to any of these property it will pick a random based on the number given by computer to select the taste type
            salty: ["olive", "salt rim", "bacon"],
            bitter: ["bitters", "tonic", "lemon peel"],
            sweet: ["cola", "agave", "honey"],
            fruity: ["orange slice", "cassis", "cherry"]
        };

    $('form').on('submit', function(e) { // submit function that call on values when click to generate the drink
        orderValues = [];
        e.preventDefault(); // prevent page from reloading

        $('select').each(function() {
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        drinkOrder = new Order(orderValues); // create new order from DOM
        concoction = new Drink(pantry, drinkOrder); // mix drink with Drink constructor
        alert(concoction);
        customerBeverage = drinkNamer(concoction); // name the customer's beverage with drinkNamer();
    });
});
