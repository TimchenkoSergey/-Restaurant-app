(function() {
    "use strict";

    angular
        .module("Meals")
        .component("drinksList", {
            templateUrl : "js/modules/components/drinksList/drinksList.html",
            bindings : {},
            controllerAs : "drinksList",
            controller : ["MealsFactory", function (MealsFactory) {

                const vm          = this;
                let drinks        = [];
                vm.onlySoftDrinks = false;

                MealsFactory.getMeals()
                    .then(function (drinksObj) {
                        vm.currency = drinksObj.currency;
                        drinks = drinksObj.drinks;
                    });

                vm.openDrink = function (drink) {
                    MealsFactory.setCurrentMeal(drink);
                    MealsFactory.setCurrentMealStatus("new");
                    MealsFactory.setCurrentMealAmount(1);
                };

                vm.getDrinks = function () {
                    if(!vm.onlySoftDrinks) {
                        return drinks;
                    }
                    else {
                        return drinks.filter((item) => item.tipple !== true);
                    }
                };
            }]
        });
})();