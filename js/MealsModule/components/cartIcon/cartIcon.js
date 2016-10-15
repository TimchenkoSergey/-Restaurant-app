(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartIconPage", {
            templateUrl : "component-templates/cartIcon/template/cartIconPage.html",
            bindings : {
                count: "@"
            },
            controllerAs : "cartIcon",
            controller : CartIconController
        });

    function CartIconController() {}
})();