angular.module("Meals", [])

.factory("mealsFactory", function ($http, $q) {
	let mealApiUrl = "meals.json",
		meals      = null,
		currency   = "";

	return {

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
		}
	};
})

.controller("mealsListCtrl", function ($scope, mealsFactory) {

	mealsFactory.getMeals()
		.then(function (mealsObj) {
			$scope.currency = mealsObj.currency;
			$scope.products = mealsObj.products;
	});
	console.log("lololol");
});