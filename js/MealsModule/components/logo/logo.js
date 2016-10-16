(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:logoPage
         *
         * @description
         * Component provides an interface to logo section.
         *
         * @usage <logo-page></logo-page>
         **/
        .component("logoPage", {
            templateUrl : "component-templates/logo/template/logoPage.html",
            bindings : {},
            controllerAs : "logo",
            controller : LogoController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:LogoController
     *
     * @description
     * Controller component "logoPage".
     **/
    function LogoController() {}
})();