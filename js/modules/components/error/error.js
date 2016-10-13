(function() {
    "use strict";

    angular
        .module("Meals")
        .component("errorPage", {
            templateUrl : "js/modules/components/error/errorPage.html",
            bindings : {},
            controllerAs : "error",
            controller : [errorController]
        });

    function errorController() {}
})();