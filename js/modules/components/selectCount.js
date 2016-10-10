app.component("selectCount", {
    templateUrl : "component_templates/selectCountPage.html",
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