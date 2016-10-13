(function() {
    "use strict";

    angular
        .module("Meals")
        .component("errorPage", {
            templateUrl : "js/modules/components/error/template/errorPage.html",
            bindings : {},
            controllerAs : "error",
            controller : [ErrorController]
        });

    function ErrorController() {}
})();