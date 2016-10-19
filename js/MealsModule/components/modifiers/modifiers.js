(function() {
    "use strict";

    angular
        .module("Meals")
        /**
         * @ngdoc directive
         * @name Meals.directive:modifiersPage
         *
         * @description
         * Component provides an interface of modifiers section.
         * Accepts from parent controller currency in variable "currency".
         *
         * @usage <modifiers-page></modifiers-page>
         **/
        .component("modifiersPage", {
            templateUrl: "component-templates/modifiers/template/modifiersPage.html",
            bindings: {
                currency: "@"
            },
            controllerAs: "mod",
            controller: ModifiersController
        });

    /**
     * @ngdoc controller
     * @name Meals.controller:ModifiersController
     * @requires Meals.MealsFactory
     * @requires Meals.ModifiersFactory
     * @property {object[]} modifiers Array of modifiers.
     *
     * @description
     * Controller component "modifiersPage".
     * Handle a user choice about modifiers.
     **/
    function ModifiersController(MealsFactory, ModifiersFactory) {

        const vm                = this;
        let   selectedModifiers = [];

        vm.modifiers          = MealsFactory.getModifiers();
        vm.selectModifier     = selectModifier;
        vm.cleanPickModifiers = cleanPickModifiers;

        vm.cleanPickModifiers();

        if (MealsFactory.getCurrentMealStatus() === "edit") {
            //Pick checkboxes for select modifiers
            let checkedModifiers = ModifiersFactory.getCheckedModifiers();
            selectedModifiers    = ModifiersFactory.pickCheckedModifiers(vm.modifiers, checkedModifiers);
        }

        /**
         * @ngdoc method
         * @name Meals.controller:ModifiersController#cleanPickModifiers
         * @methodOf Meals.controller:ModifiersController
         * @description
         * Clean pick modifiers checkbox.
         **/
        function cleanPickModifiers() {
            if (vm.modifiers) {
                vm.modifiers.forEach((item) => item.check = false);
            }
        }

        /**
         * @ngdoc method
         * @name Meals.controller:ModifiersController#selectModifier
         * @methodOf Meals.controller:ModifiersController
         * @description
         * Call method selectModifier owned ModifiersFactory.
         *
         * @param {object} modifier Modifier object.
         **/
        function selectModifier(modifier) {
            selectedModifiers = ModifiersFactory.selectModifier(selectedModifiers, modifier);
        }
    }
})();