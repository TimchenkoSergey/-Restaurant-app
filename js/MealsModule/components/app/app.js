(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:appPage
         *
         * @description
         * Component provides an interface of app.
         *
         * @usage <app-page></app-page>
         **/
        .component("appPage", {
            templateUrl: "component-templates/app/template/appPage.html",
            bindings: {},
            controllerAs: "app",
            controller: AppController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:AppController
     *
     * @description
     * Controller component "appPage".
     **/
    function AppController() {}
})();