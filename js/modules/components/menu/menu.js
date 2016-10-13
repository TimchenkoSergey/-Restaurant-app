(function() {
    "use strict";

    angular
        .module("Meals")
        .component("menuPage", {
            templateUrl : "js/modules/components/menu/template/menuPage.html",
            bindings : {},
            controllerAs : "menu",
            controller : [MenuController]
        });

    function MenuController() {}
})();