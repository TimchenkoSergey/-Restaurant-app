(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealPage", {
			templateUrl : "js/modules/components/meal/mealPage.html",
			bindings : {},
			controllerAs : "meal",
			controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

				const vm = this;

				vm.currentMeal  = MealsFactory.getCurrentMeal();
				vm.currency     = MealsFactory.getCurrency();
				vm.selectAmount = MealsFactory.getCurrentMealAmount();
				vm.mealStatus   = MealsFactory.getCurrentMealStatus();
				vm.cartCount    = CartFactory.getCartListCount();

				vm.addMeal = function () {
					CartFactory.addMealToCartList(vm.currentMeal, vm.selectAmount);
				};

				vm.removeMeal = function () {
					CartFactory.removeMeal(vm.currentMeal);
					CartFactory.deleteModifiers();
				};

				vm.saveMeal = function () {
					CartFactory.removeMeal(vm.currentMeal);
					vm.addMeal();
				};
			}]
		});
})();