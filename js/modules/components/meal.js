app.component("mealPage", {
	restrict : "E",
	replace : true,
	templateUrl : "component_templates/mealPage.html",
	bindings : {},
	controllerAs : "meal",
	controller : function (MealsFactory, CartFactory) {

		let self = this;

		this.currentMeal  = MealsFactory.getCurrentMeal();
		this.currency     = MealsFactory.getCurrency();
		this.selectAmount = MealsFactory.getCurrentMealAmount();
		this.mealStatus   = MealsFactory.getCurrentMealStatus();
		this.cartCount    = CartFactory.getCartListCount();

		this.selectNum = function (num) {
			this.selectAmount = num;
		};

		this.activeNum = function (num) {
			return this.selectAmount === num;
		};

		this.addMeal = function () {
			CartFactory.addMealToCartList(this.currentMeal, this.selectAmount);
		};

		this.removeMeal = function () {
			CartFactory.removeMeal(this.currentMeal);
		};

		this.saveMeal = function () {
			self.removeMeal();
			self.addMeal();
		};
	}
});