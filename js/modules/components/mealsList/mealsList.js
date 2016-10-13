(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealsList", {
			templateUrl : "js/modules/components/mealsList/template/mealsList.html",
			bindings : {},
			controllerAs : "mealsList",
			controller : ["MealsFactory", MealsListController]
		});

	function MealsListController(MealsFactory) {

		const vm = this;

		vm.openMeal = openMeal;
		vm.currency = "";
		vm.products = null;

		activate();

		function activate() {
			MealsFactory.getMeals()
				.then(getProducts);
		}

		function getProducts(mealsObj) {
			vm.currency = mealsObj.currency;
			vm.products = mealsObj.products;
		}

		function openMeal(meal) {
			MealsFactory.setCurrentMeal(meal);
			MealsFactory.setCurrentMealStatus("new");
			MealsFactory.setCurrentMealAmount(1);
		}
	}
})();