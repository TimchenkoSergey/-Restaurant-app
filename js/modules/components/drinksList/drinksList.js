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

                vm.onlySoftDrinks   = false;
                vm.openDrink        = openDrink;
                vm.getDrinksForView = getDrinksForView;

                MealsFactory.getMeals()
                    .then(getDrinks);

                function openDrink(drink) {
                    MealsFactory.setCurrentMeal(drink);
                    MealsFactory.setCurrentMealStatus("new");
                    MealsFactory.setCurrentMealAmount(1);
                }

                function getDrinksForView() {
                    if(!vm.onlySoftDrinks) {
                        return drinks;
                    }
                    else {
                        return drinks.filter((item) => item.tipple !== true);
                    }
                }

                function getDrinks(drinksObj) {
                    vm.currency = drinksObj.currency;
                    drinks      = drinksObj.drinks;
                }
            }]
        });
})();