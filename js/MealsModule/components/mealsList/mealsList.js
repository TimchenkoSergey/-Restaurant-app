(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealsList", {
			templateUrl : "component-templates/mealsList/template/mealsList.html",
			bindings : {},
			controllerAs : "mealsList",
			controller : MealsListController
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
			MealsFactory.openMeal(meal, "new", 1);
		}
	}
})();