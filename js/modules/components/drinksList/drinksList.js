(function() {
    "use strict";

    angular
        .module("Meals")
        .component("drinksList", {
            templateUrl : "js/modules/components/drinksList/template/drinksList.html",
            bindings : {},
            controllerAs : "drinksList",
            controller : ["MealsFactory", DrinksListController]
        });
    
    function DrinksListController(MealsFactory) {

        const vm     = this;
        let   drinks = [];

        vm.onlySoftDrinks   = false;
        vm.currency         = "";
        vm.openDrink        = openDrink;
        vm.getDrinksForView = getDrinksForView;

        activate();

        function activate() {
            MealsFactory.getMeals()
                .then(getDrinks);
        }

        function getDrinks(drinksObj) {
            vm.currency = drinksObj.currency;
            drinks      = drinksObj.drinks;
        }

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
    }
})();