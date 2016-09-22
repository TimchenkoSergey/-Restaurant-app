angular.module("Meals", [])

.factory("mealsFactory", function ($http, $q) {
	let mealApiUrl        = "meals.json",
		meals             = null,
		currency          = "",
		currentMeal       = null,
		currentMealStatus = "new",
		currentAmount     = 1,
		openMeal          = false;

	return {
		getOpenMeal : function () {
			return openMeal;
		},

		setOpenMeal : function (flag) {
			openMeal = flag;
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

.controller("mealsListCtrl", function ($scope, mealsFactory) {
	$scope.open = mealsFactory.getOpenMeal();
	
	mealsFactory.getMeals()
		.then(function (mealsObj) {
			$scope.currency = mealsObj.currency;
			$scope.products = mealsObj.products;
	});

	$scope.openMeal = function (meal) {
		mealsFactory.setCurrentMeal(meal);
		mealsFactory.setCurrentMealStatus("new");
		mealsFactory.setCurrentMealAmount(1);
		mealsFactory.setOpenMeal(true);
		$scope.open = mealsFactory.getOpenMeal();
	};
})

.directive("meal",function (mealsFactory) {
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
			$scope.open         = mealsFactory.getOpenMeal();
			
			$scope.cencel = function () {
				
			}
			
			$scope.removeMeal = function () {
				
			}
			
			$scope.addMeal = function () {
				
			}
			
			$scope.saveMeal = function () {
				
			}
		}
	};
});