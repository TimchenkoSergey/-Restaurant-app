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

				MealsFactory.getMeals()
					.then(function (mealsObj) {
						vm.currency = mealsObj.currency;
						vm.products = mealsObj.products;
					});

				vm.openMeal = function (meal) {
					MealsFactory.setCurrentMeal(meal);
					MealsFactory.setCurrentMealStatus("new");
					MealsFactory.setCurrentMealAmount(1);
				};
			}]
		});
})();