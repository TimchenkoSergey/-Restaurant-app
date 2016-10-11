(function() {
    "use strict";

    angular
        .module("Meals")
        .component("cartIconPage", {
            templateUrl : "js/modules/components/cartIcon/cartIconPage.html",
            bindings : {
                count: "@"
            },
            controllerAs : "cartIcon",
            controller : [function () {}]
        });
})();