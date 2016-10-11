(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartPage", {
            templateUrl : "js/modules/components/cart/cartPage.html",
            bindings : {},
            controllerAs : "cart",
            controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

                const vm = this;

                vm.currency = MealsFactory.getCurrency();
                vm.cartList = CartFactory.getCartList();
                vm.total    = CartFactory.getTotalPrice();
                vm.editMeal = editMeal;

                function editMeal(meal) {
                    MealsFactory.setCurrentMealById(meal.id);
                    MealsFactory.setCurrentMealAmount(meal.amount);
                    MealsFactory.setCurrentMealStatus("edit");
                }
            }]
        });
})();