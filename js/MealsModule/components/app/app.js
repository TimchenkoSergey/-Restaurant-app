(function() {
    "use strict";

    angular
        .module("Meals")
        .component("appPage", {
            templateUrl : "component-templates/app/template/appPage.html",
            bindings : {},
            controllerAs : "app",
            controller : AppController
        });

    function AppController() {}
})();