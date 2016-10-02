app.controller("mealsListCtrl", function ($scope, $location, $anchorScroll, MealsFactory) {

	MealsFactory.getMeals()
		.then(function (mealsObj) {
			$scope.currency = mealsObj.currency;
			$scope.products = mealsObj.products;
	});
	
	$scope.openMeal = function (meal) {
		MealsFactory.setCurrentMeal(meal);
		MealsFactory.setCurrentMealStatus("new");
		MealsFactory.setCurrentMealAmount(1);
	};
});