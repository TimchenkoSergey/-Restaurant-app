app.component("mealsList", {
	restrict : "E",
	replace : true,
	templateUrl : "component_templates/mealsList.html",
	bindings : {},
	controllerAs : "mealsList",
	controller : function (MealsFactory) {

		const self = this;

		MealsFactory.getMeals()
			.then(function (mealsObj) {
				self.currency = mealsObj.currency;
				self.products = mealsObj.products;
			});

		this.openMeal = function (meal) {
			MealsFactory.setCurrentMeal(meal);
			MealsFactory.setCurrentMealStatus("new");
			MealsFactory.setCurrentMealAmount(1);
		};
	}
});