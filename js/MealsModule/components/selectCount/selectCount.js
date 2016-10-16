(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:selectCount
         *
         * @description
         * Component provides an interface to select amount of meal.
         * Transfers to the parent controller selected amount of meal in variable "select".
         *
         * @usage <select-count></select-count>
         **/
        .component("selectCount", {
            templateUrl : "component-templates/selectCount/template/selectCountPage.html",
            bindings : {
                select: "="
            },
            controllerAs : "select",
            controller : SelectCountController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:SelectCountController
     *
     * @description
     * Controller component "selectCount".
     * Captures the user's choice at amount.
     **/
    function SelectCountController() {

        const vm = this;

        vm.selectNum = selectNum;
        vm.activeNum = activeNum;

        /**
         * @ngdoc method
         * @name Meals.controller:SelectCountController#selectNum
         * @methodOf Meals.controller:SelectCountController
         * @description
         * Select meal amount.
         *
         * @param {number} num Meal amount.
         **/
        function selectNum(num) {
            vm.select = num;
        }

        /**
         * @ngdoc method
         * @name Meals.controller:SelectCountController#activeNum
         * @methodOf Meals.controller:SelectCountController
         * @description
         * Return true if variable select is num, else false.
         * If function return true, the button with num get class "active".
         *
         * @param {number} num Meal amount.
         * @return {boolean} True if select is num.
         **/
        function activeNum(num) {
            return vm.select === num;
        }
    }
})();