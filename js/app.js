var Order = function(orderValues) {
    // Pulls values from the DOM.
    this.isStrong = orderValues[0];
    this.isSalty = orderValues[1];
    this.isBitter = orderValues[2];
    this.isSweet = orderValues[3];
    this.isFruity = orderValues[4];
};

var Drink = function(orderObject) {
    // Will build the drink from the Order
};

$(document).ready(function() {
    var pantry = {
        strongIngredients: [""],
        saltyIngredients: [""],
        bitterIngredients: [""],
        sweetIngredients: ["Cola", "Agave"],
        fruityIngredients: [""]

    };

    $('form').on('submit', function(e) {
        orderValues = [];
        e.preventDefault();

        $('select').each(function() {
            // pushes DOM values to array,
            //uses ternary to convert them to boolean true or false
            orderValues.push($(this).val() === 'yes' ? true : false);
        });

        // drinkOrder = new Order(orderValues);
        //customerBeverage = new Drink(drinkOrder);
    });
});
