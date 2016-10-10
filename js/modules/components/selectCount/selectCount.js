app.component("selectCount", {
    templateUrl : "js/modules/components/selectCount/selectCountPage.html",
    bindings : {
        select: "="
    },
    controllerAs : "select",
    controller : [function () {
        "use strict";

        const self = this;

        self.selectNum = function (num) {
            self.select = num;
        };

        self.activeNum = function (num) {
            return self.select === num;
        };

    }]
});