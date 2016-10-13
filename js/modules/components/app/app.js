(function() {
    "use strict";

    angular
        .module("Meals")
        .component("appPage", {
            templateUrl : "js/modules/components/app/template/appPage.html",
            bindings : {},
            controllerAs : "app",
            controller : [AppController]
        });

    function AppController() {}
})();