var Order = function(isStrong, isSalty, isBitter, isSweet, isFruity) {
    // Pulls values from the DOM.
    this.isStrong = isStrong;
    this.isSalty = isSalty;
    this.isBitter = isBitter;
    this.isSweet = isSweet;
    this.isFruity = isFruity;
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
});
