app.component("drinksList", {
    templateUrl : "component_templates/drinksList.html",
    bindings : {},
    controllerAs : "drinksList",
    controller : function (MealsFactory) {
        "use strict";

        const self         = this;
        let onlySoftDrinks = false,
            drinks         = [];

        MealsFactory.getMeals()
            .then(function (drinksObj) {
                self.currency = drinksObj.currency;
                drinks = drinksObj.drinks;
            });

        this.openDrink = function (drink) {
            MealsFactory.setCurrentMeal(drink);
            MealsFactory.setCurrentMealStatus("new");
            MealsFactory.setCurrentMealAmount(1);
        };

        this.selectOnlySoftDrinks = function (select) {
            onlySoftDrinks = select;
        };

        this.getDrinks = function () {
            if(!onlySoftDrinks) {
                return drinks;
            }
            else {
                return drinks.filter((item) => drinks.tipple !== true);
            }
        };
    }
});