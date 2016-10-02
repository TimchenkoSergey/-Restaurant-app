app.directive("meal",function (MealsFactory, CartFactory) {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "meal.html",
		scope : {},
		controller : function ($scope) {
			$scope.currentMeal  = MealsFactory.getCurrentMeal();
			$scope.currency     = MealsFactory.getCurrency();
			$scope.selectAmount = MealsFactory.getCurrentMealAmount();
			$scope.mealStatus   = MealsFactory.getCurrentMealStatus();
            $scope.cartCount    = CartFactory.getCartListCount();

            $scope.selectNum = function (num) {
                $scope.selectAmount = num;
            };

            $scope.activeNum = function (num) {
                return $scope.selectAmount === num;
            };
			
			$scope.addMeal = function () {
                CartFactory.addMealToCartList($scope.currentMeal, $scope.selectAmount);
			};

            $scope.removeMeal = function () {
                CartFactory.removeMeal($scope.currentMeal);
            };
			
			$scope.saveMeal = function () {
				CartFactory.removeMeal($scope.currentMeal);
                CartFactory.addMealToCartList($scope.currentMeal, $scope.selectAmount);
			};
		}
	};
});