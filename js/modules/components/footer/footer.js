(function() {
    "use strict";

    angular
        .module("Meals")
        .component("footerPage", {
            templateUrl : "js/modules/components/footer/footerPage.html",
            bindings : {},
            controllerAs : "footer",
            controller : [footerController]
        });

    function footerController() {}
})();