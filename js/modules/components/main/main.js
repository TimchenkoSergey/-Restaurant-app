(function() {
    "use strict";

    angular
        .module("Meals")
        .component("mainPage", {
            templateUrl : "js/modules/components/main/template/mainPage.html",
            bindings : {},
            controllerAs : "main",
            controller : [MainController]
        });
    
    function MainController() {}
})();