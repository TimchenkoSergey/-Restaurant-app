(function() {
    "use strict";

    angular
        .module("Meals")
        .component("headerPage", {
            templateUrl : "component-templates/header/template/headerPage.html",
            bindings : {},
            controllerAs : "header",
            controller : HeaderController
        });

    function HeaderController() {}
})();