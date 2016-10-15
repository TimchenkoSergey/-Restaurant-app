(function() {
    "use strict";

    angular
        .module("Meals")
        .component("errorPage", {
            templateUrl : "component-templates/error/template/errorPage.html",
            bindings : {},
            controllerAs : "error",
            controller : ErrorController
        });

    function ErrorController() {}
})();