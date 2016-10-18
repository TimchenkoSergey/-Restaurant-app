(function() {
	"use strict";

	angular
		.module("Meals")
		/**
		 * @ngdoc directive
		 * @name Meals.directive:mealPage
		 *
		 * @description
		 * Component provides an interface of meal.
		 * Accepts from parent controller path where the user came in variable "path".
		 *
		 * @usage <meal-page></meal-page>
		 **/
		.component("mealPage", {
			templateUrl: "component-templates/meal/template/mealPage.html",
			bindings: {
				path: "@"
			},
			controllerAs: "meal",
			controller: MealController
		});

	/**
	 * @ngdoc controller
	 * @name Meals.controller:MealController
	 * @requires Meals.MealsFactory
	 * @requires Meals.CartFactory
	 * @property {object} currentMeal Current meal.
	 * @property {string} currency Currency.
	 * @property {number} selectAmount Current meal select amount.
	 * @property {string} mealStatus Current meal status.
	 * @property {number} cartCount Count meal in cart.
	 *
	 * @description
	 * Controller component "mealPage".
	 * Allows the user to add meal to cart, delete meal, edit meal and etc.
	 **/
	function MealController(MealsFactory, CartFactory) {

		const vm = this;

		vm.currentMeal  = MealsFactory.getCurrentMeal();
		vm.currency     = MealsFactory.getCurrency();
		vm.selectAmount = MealsFactory.getCurrentMealAmount();
		vm.mealStatus   = MealsFactory.getCurrentMealStatus();
		vm.cartCount    = CartFactory.getCartListCount();
		vm.addMeal      = addMeal;
		vm.removeMeal   = removeMeal;
		vm.saveMeal     = saveMeal;

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealController#addMeal
		 * @methodOf Meals.controller:MealController
		 * @description
		 * Call method addMealToCartList owned CartFactory.
		 **/
		function addMeal() {
			CartFactory.addMealToCartList(vm.currentMeal, vm.selectAmount);
		}

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealController#removeMeal
		 * @methodOf Meals.controller:MealController
		 * @description
		 * Call method removeMeal owned CartFactory
		 * and method deleteModifiers owned CartFactory.
		 **/
		function removeMeal() {
			CartFactory.removeMeal();
			CartFactory.deleteModifiers();
		}

		/**
		 * @ngdoc method
		 * @name Meals.controller:MealController#saveMeal
		 * @methodOf Meals.controller:MealController
		 * @description
		 * Call method removeMeal owned CartFactory
		 * and method addMealToCartList owned CartFactory.
		 **/
		function saveMeal() {
			CartFactory.removeMeal();
			vm.addMeal();
		}
	}
})();