app.controller("mealsListCtrl", function ($scope, mealsFactory) {
    $scope.open = mealsFactory.getOpenPage();

    $scope.$on("openPage", function () {
        $scope.open = mealsFactory.getOpenPage();
    });

	mealsFactory.getMeals()
		.then(function (mealsObj) {
			$scope.currency = mealsObj.currency;
			$scope.products = mealsObj.products;
	});

    $scope.openCart = function () {
        mealsFactory.openPage("cart");
    };

    $scope.openMain = function () {
        mealsFactory.openPage("main");
    };

	$scope.openMeal = function (meal) {
		mealsFactory.setCurrentMeal(meal);
		mealsFactory.setCurrentMealStatus("new");
		mealsFactory.setCurrentMealAmount(1);
		mealsFactory.openPage("meal");
	};
});