(function() {
    "use strict";

    angular
        .module("Meals")
        .component("menuPage", {
            templateUrl : "js/modules/components/menu/menuPage.html",
            bindings : {},
            controllerAs : "menu",
            controller : [menuController]
        });

    function menuController() {}
})();