(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:drinksList
         *
         * @description
         * Component provides an interface to list of drinks.
         *
         * @usage <drinks-list></drinks-list>
         **/
        .component("drinksList", {
            templateUrl: "component-templates/drinksList/template/drinksList.html",
            bindings: {},
            controllerAs: "drinksList",
            controller: DrinksListController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:DrinksListController
     * @requires Meals.MealsFactory
     * @property {string} currency Currency.
     * @property {boolean} onlySoftDrinks Variable indicating select only soft drink or no.
     *
     * @description
     * Controller component "drinksList".
     * Handle a user choice about drink.
     **/
    function DrinksListController(MealsFactory) {

        const vm     = this;

        vm.drinks           = [];
        vm.onlySoftDrinks   = false;
        vm.currency         = "";
        vm.openDrink        = openDrink;
        vm.getDrinksForView = getDrinksForView;

        activate();

        /**
         * @ngdoc method
         * @name Meals.controller:DrinksListController#activate
         * @methodOf Meals.controller:DrinksListController
         * @description
         * Method to initialize data.
         **/
        function activate() {
            MealsFactory.getMeals()
                .then(getDrinks);
        }

        /**
         * @ngdoc method
         * @name Meals.controller:DrinksListController#getDrinks
         * @methodOf Meals.controller:DrinksListController
         * @description
         * Assigning a data at properties.
         *
         * @param {object} drinksObj Drinks object contains currency and drinks array.
         **/
        function getDrinks(drinksObj) {
            vm.currency = drinksObj.currency;
            vm.drinks   = drinksObj.drinks;
        }

        /**
         * @ngdoc method
         * @name Meals.controller:DrinksListController#openDrink
         * @methodOf Meals.controller:DrinksListController
         * @description
         * Call method openMeal owned MealsFactory.
         *
         * @param {object} drink Drink object.
         **/
        function openDrink(drink) {
            MealsFactory.openMeal(drink, "new", 1);
        }

        /**
         * @ngdoc method
         * @name Meals.controller:DrinksListController#getDrinksForView
         * @methodOf Meals.controller:DrinksListController
         * @description
         * Return all drinks or only soft drinks.
         *
         * @return {object[]} Array of drinks.
         **/
        function getDrinksForView() {

            if (vm.onlySoftDrinks) {
                return vm.drinks.filter((item) => item.tipple !== true);
            }
            else {
                return vm.drinks;
            }
        }
    }
})();