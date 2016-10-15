(function() {
    "use strict";

    angular
        .module("Meals")
        .component("logoPage", {
            templateUrl : "component-templates/logo/template/logoPage.html",
            bindings : {},
            controllerAs : "logo",
            controller : LogoController
        });

    function LogoController() {}
})();