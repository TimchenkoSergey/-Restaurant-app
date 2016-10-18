(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:menuPage
         *
         * @description
         * Component provides an interface to menu section.
         *
         * @usage <menu-page></menu-page>
         **/
        .component("menuPage", {
            templateUrl: "component-templates/menu/template/menuPage.html",
            bindings: {},
            controllerAs: "menu",
            controller: MenuController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:MenuController
     *
     * @description
     * Controller component "menuPage".
     **/
    function MenuController() {}
})();