(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealsList", {
			templateUrl : "js/modules/components/mealsList/mealsList.html",
			bindings : {},
			controllerAs : "mealsList",
			controller : ["MealsFactory", function (MealsFactory) {

				const self = this;

				MealsFactory.getMeals()
					.then(function (mealsObj) {
						self.currency = mealsObj.currency;
						self.products = mealsObj.products;
					});

				self.openMeal = function (meal) {
					MealsFactory.setCurrentMeal(meal);
					MealsFactory.setCurrentMealStatus("new");
					MealsFactory.setCurrentMealAmount(1);
				};
			}]
		});
})();