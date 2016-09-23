angular.module("Meals", [])

.factory("mealsFactory", function ($http, $q) {
	let mealApiUrl        = "meals.json",
		meals             = null,
		currency          = "",
		currentMeal       = null,
		currentMealStatus = "new",
		currentAmount     = 1,
		openPage          = "main";

	return {
		getOpenPage : function () {
			return openPage;
		},

		setOpenPage : function (str) {
            openPage = str;
		},

		getMeals : function () {
			let deferred = $q.defer();

			$http({method: "GET", url: mealApiUrl})
				.success(function (data) {
					meals    = data;
					currency = data.currency;

					deferred.resolve(data);
				})
				.error(function (data, status) {
					deferred.reject("Error in $http request");

					console.log(data);
					console.log(status);
				});

			return deferred.promise;
		},

		setCurrentMeal : function (meal) {
			currentMeal = meal;
		},

		getCurrentMeal : function () {
			return currentMeal;
		},

		setCurrentMealStatus : function (status) {
			currentMealStatus = status;
		},

		getCurrentMealStatus : function () {
			return currentMealStatus;
		},

		getCurrency : function () {
			return currency;
		},

		setCurrentMealAmount : function (amount) {
			currentAmount = amount;
		},

		getCurrentMealAmount : function () {
			return currentAmount;
		}
	};
})

.controller("mealsListCtrl", function ($scope, $rootScope, mealsFactory) {
    $scope.open = mealsFactory.getOpenPage();

    $scope.$on("openPage", function () {
        $scope.open = mealsFactory.getOpenPage();
    });

	mealsFactory.getMeals()
		.then(function (mealsObj) {
			$scope.currency = mealsObj.currency;
			$scope.products = mealsObj.products;
	});

	$scope.openMeal = function (meal) {
		mealsFactory.setCurrentMeal(meal);
		mealsFactory.setCurrentMealStatus("new");
		mealsFactory.setCurrentMealAmount(1);
		mealsFactory.setOpenPage("meal");
        $rootScope.$broadcast("openPage");
	};
})

.directive("meal",function (mealsFactory) {
	return {
		restrict : "E",
		replace : true,
		templateUrl : "meal.html",
		scope : {},
		controller : function ($scope, $rootScope) {
			$scope.currentMeal  = mealsFactory.getCurrentMeal();
			$scope.currency     = mealsFactory.getCurrency();
			$scope.selectAmount = mealsFactory.getCurrentMealAmount();
			$scope.mealStatus   = mealsFactory.getCurrentMealStatus();
            $scope.count        = 0;

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
                mealsFactory.setOpenPage("main");
                $rootScope.$broadcast("openPage");
			};

            $scope.openCart = function () {
                mealsFactory.setOpenPage("cart");
                $rootScope.$broadcast("openPage");
            };

			$scope.removeMeal = function () {
				
			};
			
			$scope.addMeal = function () {
				
			};
			
			$scope.saveMeal = function () {
				
			};
		}
	};
})

.directive("cart", function (mealsFactory) {
    return {
        restrict : "E",
        replace : true,
        templateUrl : "cart.html",
        scope : {},
        controller : function ($scope, $rootScope) {
            $scope.$on("openPage", function () {
                $scope.open = mealsFactory.getOpenPage();
            });
        }
    };
});