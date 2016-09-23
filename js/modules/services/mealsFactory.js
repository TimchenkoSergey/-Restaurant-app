app.factory("mealsFactory", function ($http, $q, $rootScope) {
	let mealApiUrl        = "meals.json",
		meals             = null,
		currency          = "",
		currentMeal       = null,
		currentMealStatus = "new",
		currentAmount     = 1,
		openPage          = "main";

	return {
        openPage : function (page) {
            this.setOpenPage(page);
            $rootScope.$broadcast("openPage");
        },

		getOpenPage : function () {
			return openPage;
		},

		setOpenPage : function (page) {
            openPage = page;
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