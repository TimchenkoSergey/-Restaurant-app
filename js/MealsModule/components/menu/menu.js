(function() {
    "use strict";

    angular
        .module("Meals")
        .component("menuPage", {
            templateUrl : "component-templates/menu/template/menuPage.html",
            bindings : {},
            controllerAs : "menu",
            controller : MenuController
        });

    function MenuController() {}
})();