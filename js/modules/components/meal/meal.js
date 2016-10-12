(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealPage", {
			templateUrl : "js/modules/components/meal/mealPage.html",
			bindings : {
				path: "@"
			},
			controllerAs : "meal",
			controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

				const vm = this;

				vm.currentMeal  = MealsFactory.getCurrentMeal();
				vm.currency     = MealsFactory.getCurrency();
				vm.selectAmount = MealsFactory.getCurrentMealAmount();
				vm.mealStatus   = MealsFactory.getCurrentMealStatus();
				vm.cartCount    = CartFactory.getCartListCount();
				vm.addMeal      = addMeal;
				vm.removeMeal   = removeMeal;
				vm.saveMeal     = saveMeal;

				function addMeal() {
					CartFactory.addMealToCartList(vm.currentMeal, vm.selectAmount);
				}

				function removeMeal() {
					CartFactory.removeMeal(vm.currentMeal);
					CartFactory.deleteModifiers();
				}

				function saveMeal() {
					CartFactory.removeMeal(vm.currentMeal);
					vm.addMeal();
				}
			}]
		});
})();