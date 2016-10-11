(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartPage", {
            templateUrl : "js/modules/components/cart/cartPage.html",
            bindings : {},
            controllerAs : "cart",
            controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

                this.currency = MealsFactory.getCurrency();
                this.cartList = CartFactory.getCartList();
                this.total = CartFactory.getTotalPrice();


                this.editMeal = function (meal) {
                    MealsFactory.setCurrentMealById(meal.id);
                    MealsFactory.setCurrentMealAmount(meal.amount);
                    MealsFactory.setCurrentMealStatus("edit");
                };
            }]
        });
})();