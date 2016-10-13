(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartIconPage", {
            templateUrl : "js/modules/components/cartIcon/template/cartIconPage.html",
            bindings : {
                count: "@"
            },
            controllerAs : "cartIcon",
            controller : [CartIconController]
        });

    function CartIconController() {}
})();