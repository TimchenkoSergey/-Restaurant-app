(function() {
    "use strict";

    angular
        .module("Meals")
        .component("footerPage", {
            templateUrl : "component-templates/footer/template/footerPage.html",
            bindings : {},
            controllerAs : "footer",
            controller : FooterController
        });

    function FooterController() {}
})();