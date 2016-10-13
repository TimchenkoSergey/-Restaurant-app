(function() {
	"use strict";

	angular
		.module("Meals")
		.factory("MealsFactory", ["$http", "$q", MealsFactory]);

	function MealsFactory($http, $q) {

		let mealApiUrl        = "meals.json",
			meals             = null,
			currency          = "",
			currentMeal       = null,
			currentMealStatus = "new",
			currentAmount     = 1,

			factory = {
				getModifiers         : getModifiers,
				getMeals             : getMeals,
				getCurrentMeal       : getCurrentMeal,
				setCurrentMeal       : setCurrentMeal,
				getCurrentMealStatus : getCurrentMealStatus,
				setCurrentMealStatus : setCurrentMealStatus,
				getCurrency          : getCurrency,
				getCurrentMealAmount : getCurrentMealAmount,
				setCurrentMealAmount : setCurrentMealAmount,
				setCurrentMealById   : setCurrentMealById
			};

		return factory;

		function _getMealsHttp(deferred) {

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

			return deferred;
		}

		function getModifiers() {
			if(currentMeal !== null) {
				return currentMeal.modifiers;
			}
			else {
				return false;
			}
		}

		function getMeals() {
			let deferred = $q.defer();

			if(!meals) {
				deferred = _getMealsHttp(deferred);
			}
			else {
				deferred.resolve(meals);
			}

			return deferred.promise;
		}

		function getCurrentMeal() {
			return currentMeal;
		}

		function setCurrentMeal(meal) {
			currentMeal = meal;
		}

		function getCurrentMealStatus() {
			return currentMealStatus;
		}

		function setCurrentMealStatus(status) {
			currentMealStatus = status;
		}

		function getCurrency() {
			return currency;
		}

		function getCurrentMealAmount() {
			return currentAmount;
		}

		function setCurrentMealAmount(amount) {
			currentAmount = amount;
		}

		function setCurrentMealById(id) {

			currentMeal = meals.products.filter((item) => item.id === id)[0];

			if(!currentMeal) {
				currentMeal = meals.drinks.filter((item) => item.id === id)[0];
			}
		}
	}
})();