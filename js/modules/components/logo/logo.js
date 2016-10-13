(function() {
    "use strict";

    angular
        .module("Meals")
        .component("logoPage", {
            templateUrl : "js/modules/components/logo/logoPage.html",
            bindings : {},
            controllerAs : "logo",
            controller : [logoController]
        });

    function logoController() {}
})();