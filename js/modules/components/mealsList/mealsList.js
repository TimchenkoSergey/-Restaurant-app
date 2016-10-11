(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealsList", {
			templateUrl : "js/modules/components/mealsList/mealsList.html",
			bindings : {},
			controllerAs : "mealsList",
			controller : ["MealsFactory", function (MealsFactory) {

				const vm = this;

				vm.openMeal = openMeal;

				MealsFactory.getMeals()
					.then(getProducts);

				function openMeal(meal) {
					MealsFactory.setCurrentMeal(meal);
					MealsFactory.setCurrentMealStatus("new");
					MealsFactory.setCurrentMealAmount(1);
				}

				function getProducts(mealsObj) {
					vm.currency = mealsObj.currency;
					vm.products = mealsObj.products;
				}
			}]
		});
})();