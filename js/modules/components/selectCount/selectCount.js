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

                vm.selectNum = function (num) {
                    vm.select = num;
                };

                vm.activeNum = function (num) {
                    return vm.select === num;
                };

            }]
        });
})();