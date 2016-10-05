app.factory("MealsFactory", function ($http, $q) {
	"use strict";

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

            for(let i = 0, len = meals.products.length; i < len; i++) {
                if(meals.products[i].id == id) {
                    currentMeal = meals.products[i];
                    return true;
                }
            }

            return false;
        }
	};
});