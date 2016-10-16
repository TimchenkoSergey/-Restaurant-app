(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:headerPage
         *
         * @description
         * Component provides an interface to header section.
         *
         * @usage <header-page></header-page>
         **/
        .component("headerPage", {
            templateUrl : "component-templates/header/template/headerPage.html",
            bindings : {},
            controllerAs : "header",
            controller : HeaderController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:HeaderController
     *
     * @description
     * Controller component "headerPage".
     **/
    function HeaderController() {}
})();