(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:cartIconPage
         *
         * @description
         * Component provides an interface of cart button and string with meals count.
         * Accepts from parent controller count meals in cart in variable "count".
         *
         * @usage <cart-icon-page></cart-icon-page>
         **/
        .component("cartIconPage", {
            templateUrl: "component-templates/cartIcon/template/cartIconPage.html",
            bindings: {
                count: "@"
            },
            controllerAs: "cartIcon",
            controller: CartIconController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:CartIconController
     *
     * @description
     * Controller component "cartIconPage".
     **/
    function CartIconController() {}
})();