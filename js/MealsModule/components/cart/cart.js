(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartPage", {
            templateUrl : "component-templates/cart/template/cartPage.html",
            bindings : {},
            controllerAs : "cart",
            controller : CartController
        });
    
    function CartController(MealsFactory, CartFactory) {
        
        const vm = this;

        vm.currency   = MealsFactory.getCurrency();
        vm.cartList   = CartFactory.getCartList();
        vm.totalPrice = CartFactory.getTotalPrice();
        vm.editMeal   = editMeal;

        function editMeal(meal, index) {
            CartFactory.setIndexEditMeal(index);
            MealsFactory.setCurrentMealById(meal.id);
            MealsFactory.setCurrentMealAmount(meal.amount);
            MealsFactory.setCurrentMealStatus("edit");
        }
    }
})();