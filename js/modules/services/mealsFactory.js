(function() {
	"use strict";

	angular
		.module("Meals")
		.factory("MealsFactory", function ($http, $q) {

			let mealApiUrl        = "meals.json",
				meals             = null,
				currency          = "",
				currentMeal       = null,
				currentMealStatus = "new",
				currentAmount     = 1;

			return {
				getModifiers : function () {
					if(currentMeal !== null) {
						return currentMeal.modifiers;
					}
					else {
						return false;
					}
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

				getCurrentMeal : function () {
					return currentMeal;
				},

				setCurrentMeal : function (meal) {
					currentMeal = meal;
				},

				getCurrentMealStatus : function () {
					return currentMealStatus;
				},

				setCurrentMealStatus : function (status) {
					currentMealStatus = status;
				},

				getCurrency : function () {
					return currency;
				},

				getCurrentMealAmount : function () {
					return currentAmount;
				},

				setCurrentMealAmount : function (amount) {
					currentAmount = amount;
				},

				setCurrentMealById : function (id) {

					currentMeal = meals.products.filter((item) => item.id === id)[0];

					if(!currentMeal) {
						currentMeal = meals.drinks.filter((item) => item.id === id)[0];
					}
				}
			};
		});
})();