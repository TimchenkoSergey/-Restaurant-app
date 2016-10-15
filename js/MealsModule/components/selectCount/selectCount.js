(function() {
    "use strict";

    angular
        .module("Meals")
        .component("selectCount", {
            templateUrl : "component-templates/selectCount/template/selectCountPage.html",
            bindings : {
                select: "="
            },
            controllerAs : "select",
            controller : SelectCountController
        });

    function SelectCountController() {

        const vm = this;

        vm.selectNum = selectNum;
        vm.activeNum = activeNum;

        function selectNum(num) {
            vm.select = num;
        }

        function activeNum(num) {
            return vm.select === num;
        }
    }
})();