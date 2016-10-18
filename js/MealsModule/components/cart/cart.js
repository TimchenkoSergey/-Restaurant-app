(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:cartPage
         *
         * @description
         * Component provides an interface to cart page.
         *
         * @usage <cart-page></cart-page>
         **/
        .component("cartPage", {
            templateUrl: "component-templates/cart/template/cartPage.html",
            bindings: {},
            controllerAs: "cart",
            controller: CartController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:CartController
     * @requires Meals.MealsFactory
     * @requires Meals.CartFactory
     * @property {string} currency Currency.
     * @property {object[]}  cartList Array of select meals and drinks.
     * @property {number} totalPrice Total price.
     *
     * @description
     * Controller component "cartPage".
     * Display user-selected meals and drinks and their total price.
     * Provides the ability to edit their choice.
     **/
    function CartController(MealsFactory, CartFactory) {
        
        const vm = this;

        vm.currency   = MealsFactory.getCurrency();
        vm.cartList   = CartFactory.getCartList();
        vm.totalPrice = CartFactory.getTotalPrice();
        vm.editMeal   = editMeal;

        /**
         * @ngdoc method
         * @name Meals.controller:CartController#editMeal
         * @methodOf Meals.controller:CartController
         * @description
         * Open meal for edit.
         *
         * @param {object} meal Meal object.
         * @param {number} index Current meal index.
         **/
        function editMeal(meal, index) {
            CartFactory.setIndexEditMeal(index);
            MealsFactory.setCurrentMealById(meal.id);
            MealsFactory.setCurrentMealAmount(meal.amount);
            MealsFactory.setCurrentMealStatus("edit");
        }
    }
})();