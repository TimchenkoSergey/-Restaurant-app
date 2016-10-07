app.component("drinksList", {
    templateUrl : "component_templates/drinksList.html",
    bindings : {},
    controllerAs : "drinksList",
    controller : function (MealsFactory) {
        "use strict";

        const self          = this;
        let drinks          = [];
        self.onlySoftDrinks = false;

        MealsFactory.getMeals()
            .then(function (drinksObj) {
                self.currency = drinksObj.currency;
                drinks = drinksObj.drinks;
            });

        self.openDrink = function (drink) {
            MealsFactory.setCurrentMeal(drink);
            MealsFactory.setCurrentMealStatus("new");
            MealsFactory.setCurrentMealAmount(1);
        };

        self.getDrinks = function () {
            if(!self.onlySoftDrinks) {
                return drinks;
            }
            else {
                return drinks.filter((item) => item.tipple !== true);
            }
        };
    }
});