app.directive("meal",function (mealsFactory, cartFactory) {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "meal.html",
		scope : {},
		controller : function ($scope) {
			$scope.currentMeal  = mealsFactory.getCurrentMeal();
			$scope.currency     = mealsFactory.getCurrency();
			$scope.selectAmount = mealsFactory.getCurrentMealAmount();
			$scope.mealStatus   = mealsFactory.getCurrentMealStatus();
            $scope.cartCount    = cartFactory.getCartListCount();

            $scope.$on("openPage", function () {
                $scope.open = mealsFactory.getOpenPage();
            });

            $scope.selectNum = function (num) {
                $scope.selectAmount = num;
            };

            $scope.activeNum = function (num) {
                return $scope.selectAmount === num;
            };

			$scope.cencel = function () {
                mealsFactory.openPage("main");
			};

            $scope.openCart = function () {
                mealsFactory.openPage("cart");
            };
			
			$scope.addMeal = function () {
                cartFactory.addMealToCartList($scope.currentMeal, $scope.selectAmount);
                mealsFactory.openPage("cart");
			};

            $scope.removeMeal = function () {
                cartFactory.removeMeal($scope.currentMeal);
                mealsFactory.openPage("cart");
            };
			
			$scope.saveMeal = function () {
				cartFactory.removeMeal($scope.currentMeal);
                $scope.addMeal();
			};
		}
	};
});