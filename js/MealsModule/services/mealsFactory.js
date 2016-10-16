(function() {
	"use strict";

	angular
		.module("Meals")
		.factory("MealsFactory", MealsFactory);

	/**
	 * @ngdoc service
	 * @name Meals.MealsFactory
	 * @requires $http
	 * @requires $q
	 *
	 * @description
	 * Factory get currency, array of products and array of drinks,
	 * and work with current meal.
	 *
	 **/
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
				setCurrentMealById   : setCurrentMealById,
				openMeal             : openMeal
			};

		return factory;

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#openMeal
		 * @methodOf Meals.MealsFactory
		 *
		 * @description
		 * Set current meal, current meal status and current meal amount.
		 *
		 * @param {object} meal   Current meal.
		 * @param {string} status Meal status("new" or "edit").
		 * @param {number} amount Meal amount.
		 **/
		function openMeal(meal, status, amount) {
			setCurrentMeal(meal);
			setCurrentMealStatus(status);
			setCurrentMealAmount(amount);
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getMealsFromHttp
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Obtaining data on foods and drinks from the server.
		 *
		 * @param {object} deferred Deferred object.
		 * @return {object} Deferred object with resolve and reject.
		 **/
		function getMealsFromHttp(deferred) {

			$http({method : "GET", url : mealApiUrl})
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

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getModifiers
		 * @methodOf Meals.MealsFactory
		 * @description
		 * If meals have modifiers return them else return false
		 *
		 * @return {object|boolean} Current meal modifiers or false.
		 **/
		function getModifiers() {

			if (currentMeal !== null) {
				return currentMeal.modifiers;
			}
			else {
				return false;
			}
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getMeals
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Return promise with the response received from the server or
		 * if the request has already been, return promise with the
		 * meals object.
		 *
		 * @return {object} Promise.
		 **/
		function getMeals() {
			let deferred = $q.defer();

			if (!meals) {
				deferred = getMealsFromHttp(deferred);
			}
			else {
				deferred.resolve(meals);
			}

			return deferred.promise;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getCurrentMeal
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Return current meal.
		 *
		 * @return {object} Current meal.
		 **/
		function getCurrentMeal() {
			return currentMeal;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#setCurrentMeal
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Set current meal.
		 *
		 * @param {object} meal Current meal.
		 **/
		function setCurrentMeal(meal) {
			currentMeal = meal;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getCurrentMealStatus
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Return current meal status("new" or "edit").
		 *
		 * @return {string} Current meal status("new" or "edit").
		 **/
		function getCurrentMealStatus() {
			return currentMealStatus;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#setCurrentMealStatus
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Set current meal status("new" or "edit").
		 *
		 * @param {string} status Current meal status("new" or "edit").
		 **/
		function setCurrentMealStatus(status) {
			currentMealStatus = status;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getCurrency
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Return currency.
		 *
		 * @return {string} Currency.
		 **/
		function getCurrency() {
			return currency;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#getCurrentMealAmount
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Return current meal amount.
		 *
		 * @return {number} Current meal amount.
		 **/
		function getCurrentMealAmount() {
			return currentAmount;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#setCurrentMealAmount
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Set current meal amount.
		 *
		 * @param {number} amount Current meal amount.
		 **/
		function setCurrentMealAmount(amount) {
			currentAmount = amount;
		}

		/**
		 * @ngdoc method
		 * @name Meals.MealsFactory#setCurrentMealById
		 * @methodOf Meals.MealsFactory
		 * @description
		 * Set current meal by id.
		 *
		 * @param {string} id Id of current meal.
		 **/
		function setCurrentMealById(id) {

			currentMeal = meals.products.filter((item) => item.id === id)[0];

			if (!currentMeal) {
				currentMeal = meals.drinks.filter((item) => item.id === id)[0];
			}
		}
	}
})();