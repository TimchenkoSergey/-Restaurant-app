(function() {
    "use strict";

    angular
        .module("Meals")
        .component("mainPage", {
            templateUrl : "component-templates/main/template/mainPage.html",
            bindings : {},
            controllerAs : "main",
            controller : MainController
        });
    
    function MainController() {}
})();