(function() {
	"use strict";

	angular
		.module("Meals")
		.component("mealPage", {
			templateUrl : "js/modules/components/meal/mealPage.html",
			bindings : {},
			controllerAs : "meal",
			controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

				const self = this;

				self.currentMeal  = MealsFactory.getCurrentMeal();
				self.currency     = MealsFactory.getCurrency();
				self.selectAmount = MealsFactory.getCurrentMealAmount();
				self.mealStatus   = MealsFactory.getCurrentMealStatus();
				self.cartCount    = CartFactory.getCartListCount();

				self.addMeal = function () {
					CartFactory.addMealToCartList(self.currentMeal, self.selectAmount);
				};

				self.removeMeal = function () {
					CartFactory.removeMeal(self.currentMeal);
					CartFactory.deleteModifiers();
				};

				self.saveMeal = function () {
					CartFactory.removeMeal(self.currentMeal);
					self.addMeal();
				};
			}]
		});
})();