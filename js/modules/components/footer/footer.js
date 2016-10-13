(function() {
    "use strict";

    angular
        .module("Meals")
        .component("footerPage", {
            templateUrl : "js/modules/components/footer/template/footerPage.html",
            bindings : {},
            controllerAs : "footer",
            controller : [FooterController]
        });

    function FooterController() {}
})();