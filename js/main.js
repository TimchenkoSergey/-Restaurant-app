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
})

.factory("cartFactory", function () {
    let cartList = [];
    
    return {
        getCartCount : function () {
            return cartList.length;
        },
        
        addItemToCartList : function (item, amount) {
            let newItem = {};

            newItem.id     = item.id;
            newItem.name   = item.name;
            newItem.price  = item.price;
            newItem.amount = amount;

            cartList.push(newItem);
        },

        getCartList : function () {
            return cartList;
        },

        getTotal : function () {
            let total = 0;

            if(cartList.length > 0) {
                for(let i = 0, len = cartList.length; i < len; i++) {
                    total += cartList[i].price * cartList[i].amount;
                }
            }

            return total.toFixed(2);
        },

        removeMeal : function (meal) {
            for(let i = 0, len = cartList.length; i < len; i++) {
                if(cartList[i].id === meal.id) {
                    cartList.splice(i, 1);
                    return true;
                }
            }
            return false;
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

.directive("meal",function (mealsFactory, cartFactory) {
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
            $scope.cartCount    = cartFactory.getCartCount();

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
			
			$scope.addMeal = function () {
                cartFactory.addItemToCartList($scope.currentMeal, $scope.selectAmount);
                $scope.openCart();
			};

            $scope.removeMeal = function () {
                cartFactory.removeMeal($scope.currentMeal);
                $scope.openCart();
            };
			
			$scope.saveMeal = function () {
				cartFactory.removeMeal($scope.currentMeal);
                $scope.addMeal();
			};
		}
	};
})

.directive("cart", function (mealsFactory, cartFactory) {
    return {
        restrict : "E",
        replace : true,
        templateUrl : "cart.html",
        scope : {},
        controller : function ($scope, $rootScope) {
            $scope.currency = mealsFactory.getCurrency();
            $scope.cartList = cartFactory.getCartList();
            $scope.total    = cartFactory.getTotal();

            $scope.$on("openPage", function () {
                $scope.open = mealsFactory.getOpenPage();
            });

            $scope.openMain = function () {
                mealsFactory.setOpenPage("main");
                $rootScope.$broadcast("openPage");
            };
            
            $scope.editMeal = function (meal) {
                let mealSelected = mealsFactory.setCurrentMealById(meal.id);

                if(mealSelected) {
                    mealsFactory.setCurrentMealAmount(meal.amount);
                    mealsFactory.setCurrentMealStatus("edit");
                    mealsFactory.setOpenPage("meal");
                    $rootScope.$broadcast("openPage");
                    console.log(mealsFactory.getOpenPage());
                }
            };
        }
    };
});