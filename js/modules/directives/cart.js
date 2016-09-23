app.directive("cart", function (mealsFactory, cartFactory) {
    return {
        restrict : "E",
        replace : true,
        templateUrl : "cart.html",
        scope : {},
        controller : function ($scope) {
            $scope.currency = mealsFactory.getCurrency();
            $scope.cartList = cartFactory.getCartList();
            $scope.total    = cartFactory.getTotalPrice();

            $scope.$on("openPage", function () {
                $scope.open = mealsFactory.getOpenPage();
            });

            $scope.openMain = function () {
                mealsFactory.openPage("main");
            };
            
            $scope.editMeal = function (meal) {
                let mealSelected = mealsFactory.setCurrentMealById(meal.id);

                if(mealSelected) {
                    mealsFactory.setCurrentMealAmount(meal.amount);
                    mealsFactory.setCurrentMealStatus("edit");
                    mealsFactory.openPage("meal");
                }
            };
        }
    };
});