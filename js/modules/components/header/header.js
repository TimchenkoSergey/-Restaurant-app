(function() {
    "use strict";

    angular
        .module("Meals")
        .component("headerPage", {
            templateUrl : "js/modules/components/header/template/headerPage.html",
            bindings : {},
            controllerAs : "header",
            controller : [HeaderController]
        });

    function HeaderController() {}
})();