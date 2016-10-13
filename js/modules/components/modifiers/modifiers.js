(function() {
    "use strict";

    angular
        .module("Meals")
        .component("modifiersPage", {
            templateUrl : "js/modules/components/modifiers/modifiersPage.html",
            bindings : {
                currency: "@"
            },
            controllerAs : "mod",
            controller : ["MealsFactory", "ModifiersFactory",
                         function (MealsFactory, ModifiersFactory) {

                const vm                = this;
                let   selectedModifiers = [];

                vm.modifiers      = MealsFactory.getModifiers();
                vm.selectModifier = selectModifier;
                
                unPickModifiers();

                if(MealsFactory.getCurrentMealStatus() === "edit") {
                    let checkedModifiers = ModifiersFactory.getCheckedModifiers();

                    ModifiersFactory.pickCheckedModifiers(vm.modifiers, selectedModifiers, checkedModifiers);
                }

                function unPickModifiers() {
                    vm.modifiers.forEach((item) => item.check = false);
                }

                function selectModifier(modifier) {
                    ModifiersFactory.selectModifier(selectedModifiers, modifier);
                }
            }]
        });
})();