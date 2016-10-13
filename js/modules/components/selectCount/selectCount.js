(function() {
    "use strict";

    angular
        .module("Meals")
        .component("selectCount", {
            templateUrl : "js/modules/components/selectCount/selectCountPage.html",
            bindings : {
                select: "="
            },
            controllerAs : "select",
            controller : [function () {

                const vm = this;

                vm.selectNum = selectNum;
                vm.activeNum = activeNum;

                function selectNum(num) {
                    vm.select = num;
                }

                function activeNum(num) {
                    return vm.select === num;
                }
            }]
        });

})();