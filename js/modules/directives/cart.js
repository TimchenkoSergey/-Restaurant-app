app.directive("cart", function (MealsFactory, CartFactory) {
    return {
        restrict : "E",
        replace : true,
        templateUrl : "cart.html",
        scope : {},
        controller : function ($scope) {
            
            $scope.currency = MealsFactory.getCurrency();
            $scope.cartList = CartFactory.getCartList();
            $scope.total    = CartFactory.getTotalPrice();

            
            $scope.editMeal = function (meal) {
                let mealSelected = MealsFactory.setCurrentMealById(meal.id);

                if(mealSelected) {
                    MealsFactory.setCurrentMealAmount(meal.amount);
                    MealsFactory.setCurrentMealStatus("edit");
                }
            };
        }
    };
});