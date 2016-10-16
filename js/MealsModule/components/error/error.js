(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:errorPage
         *
         * @description
         * Component provides an interface of error page.
         *
         * @usage <error-page></error-page>
         **/
        .component("errorPage", {
            templateUrl : "component-templates/error/template/errorPage.html",
            bindings : {},
            controllerAs : "error",
            controller : ErrorController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:ErrorController
     *
     * @description
     * Controller component "errorPage".
     **/
    function ErrorController() {}
})();