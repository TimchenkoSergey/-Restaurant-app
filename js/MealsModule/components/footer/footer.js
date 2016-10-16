(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:footerPage
         *
         * @description
         * Component provides an interface to footer section.
         *
         * @usage <footer-page></footer-page>
         **/
        .component("footerPage", {
            templateUrl : "component-templates/footer/template/footerPage.html",
            bindings : {},
            controllerAs : "footer",
            controller : FooterController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:FooterController
     *
     * @description
     * Controller component "footerPage".
     **/
    function FooterController() {}
})();