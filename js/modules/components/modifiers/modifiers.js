(function() {
    "use strict";

    angular
        .module("Meals")
        .component("modifiersPage", {
            templateUrl : "js/modules/components/modifiers/template/modifiersPage.html",
            bindings : {
                currency: "@"
            },
            controllerAs : "mod",
            controller : ["MealsFactory", "ModifiersFactory", ModifiersController]
        });

    function ModifiersController(MealsFactory, ModifiersFactory) {

        const vm                = this;
        let   selectedModifiers = [];

        vm.modifiers      = MealsFactory.getModifiers();
        vm.selectModifier = selectModifier;

        cleanPickModifiers();

        if (MealsFactory.getCurrentMealStatus() === "edit") {
            let checkedModifiers = ModifiersFactory.getCheckedModifiers();

            ModifiersFactory.pickCheckedModifiers(vm.modifiers, selectedModifiers, checkedModifiers);
        }

        function cleanPickModifiers() {
            if (vm.modifiers) {
                vm.modifiers.forEach((item) => item.check = false);
            }
        }

        function selectModifier(modifier) {
            ModifiersFactory.selectModifier(selectedModifiers, modifier);
        }
    }
})();