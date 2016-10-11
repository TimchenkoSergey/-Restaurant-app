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
            controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {

                const vm                 = this;
                let selectedModifiers    = [],
                    itemHasBeenSelected  = function (modifier) {
                        return selectedModifiers.some((item) => modifier.name === item.name);
                    },
                    deleteModifier       = function (modifier) {
                        return selectedModifiers.filter((item) => modifier.name !== item.name);
                    },
                    getCheckedModifiers  = function () {
                        let cartList = CartFactory.getCartList(),
                            meal;

                        meal = cartList.filter((item) => {
                                return item.name === MealsFactory.getCurrentMeal().name;
                    })[0];

                        return meal.modifiers;
                    },
                    pickCheckedModifiers = function (checkedModifiers) {

                        if(checkedModifiers) {

                            for (let i = 0, lenChecked = checkedModifiers.length; i < lenChecked; i++) {

                                for (let j = 0, len = vm.modifiers.length; j < len; j++) {

                                    if (vm.modifiers[j].name === checkedModifiers[i].name) {

                                        vm.modifiers[j].check = true;
                                        vm.selectModifier(vm.modifiers[j]);
                                    }
                                }
                            }
                        }
                    }

                vm.modifiers = MealsFactory.getModifiers();

                vm.selectModifier = function (modifier) {

                    if(!itemHasBeenSelected(modifier)) {
                        selectedModifiers.push(modifier);
                    }
                    else {
                        selectedModifiers = deleteModifier(modifier);
                    }

                    CartFactory.addModifiersToList(selectedModifiers);
                };

                if(MealsFactory.getCurrentMealStatus() === "edit") {
                    let checkedModifiers = getCheckedModifiers();
                    pickCheckedModifiers(checkedModifiers);
                }
            }]
        });
})();