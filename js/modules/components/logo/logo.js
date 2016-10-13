(function() {
    "use strict";

    angular
        .module("Meals")
        .component("logoPage", {
            templateUrl : "js/modules/components/logo/template/logoPage.html",
            bindings : {},
            controllerAs : "logo",
            controller : [LogoController]
        });

    function LogoController() {}
})();