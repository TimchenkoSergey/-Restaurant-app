(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:mainPage
         *
         * @description
         * Component provides an interface to main section.
         *
         * @usage <main-page></main-page>
         **/
        .component("mainPage", {
            templateUrl: "component-templates/main/template/mainPage.html",
            bindings: {},
            controllerAs: "main",
            controller: MainController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:MainController
     *
     * @description
     * Controller component "mainPage".
     **/
    function MainController() {}
})();