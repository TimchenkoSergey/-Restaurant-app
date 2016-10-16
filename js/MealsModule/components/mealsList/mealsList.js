(function() {
	"use strict";

	angular
		.module("Meals")
		/**
		 * @ngdoc directive
		 * @name Meals.directive:mealsList
		 *
		 * @description
		 * Component provides an interface to list of meals.
		 *
		 * @usage <meals-list></meals-list>
		 **/
		.component("mealsList", {
			templateUrl : "component-templates/mealsList/template/mealsList.html",
			bindings : {},
			controllerAs : "mealsList",
			controller : MealsListController
		});

	/**
	 * @ngdoc controller
	 * @name Meals.controller:MealsListController
	 * @requires Meals.MealsFactory
	 * @property {string} currency Currency.
	 * @property {object[]} products Array of products.
	 *
	 * @description
	 * Controller component "mealsList".
	 * Handle a user choice about meal.
	 **/
	function MealsListController(MealsFactory) {

		const vm = this;


		vm.openMeal = openMeal;
		vm.currency = "";
		vm.products = null;

		activate();

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealsListController#activate
		 * @methodOf Meals.controller:MealsListController
		 * @description
		 * Method to initialize data.
		 **/
		function activate() {
			MealsFactory.getMeals()
				.then(getProducts);
		}

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealsListController#getProducts
		 * @methodOf Meals.controller:MealsListController
		 * @description
		 * Assigning a data at properties.
		 *
		 * @param {object} mealsObj Meals object contains currency and products array.
		 **/
		function getProducts(mealsObj) {
			vm.currency = mealsObj.currency;
			vm.products = mealsObj.products;
		}

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealsListController#openMeal
		 * @methodOf Meals.controller:MealsListController
		 * @description
		 * Call method openMeal owned MealsFactory.
		 *
		 * @param {object} meal Meal object.
		 **/
		function openMeal(meal) {
			MealsFactory.openMeal(meal, "new", 1);
		}
	}
})();