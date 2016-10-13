(function() {
    "use strict";

    angular
        .module("Meals")
        .component("appPage", {
            templateUrl : "js/modules/components/app/appPage.html",
            bindings : {},
            controllerAs : "app",
            controller : [appController]
        });

    function appController() {}
})();