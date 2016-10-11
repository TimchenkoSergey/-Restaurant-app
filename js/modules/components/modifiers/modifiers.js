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

                const vm                = this;
                let   selectedModifiers = [];

                vm.modifiers      = MealsFactory.getModifiers();
                vm.selectModifier = selectModifier;

                if(MealsFactory.getCurrentMealStatus() === "edit") {
                    let checkedModifiers = getCheckedModifiers();

                    pickCheckedModifiers(checkedModifiers);
                }

                function selectModifier(modifier) {

                    if(!itemHasBeenSelected(modifier)) {
                        selectedModifiers.push(modifier);
                    }
                    else {
                        selectedModifiers = deleteModifier(modifier);
                    }

                    CartFactory.addModifiersToList(selectedModifiers);
                }

                function itemHasBeenSelected(modifier) {
                    return selectedModifiers.some((item) => modifier.name === item.name);
                }

                function deleteModifier(modifier) {
                    return selectedModifiers.filter((item) => modifier.name !== item.name);
                }

                function getCheckedModifiers() {
                    let cartList = CartFactory.getCartList(),
                        meal;

                    meal = cartList.filter((item) => {
                            return item.name === MealsFactory.getCurrentMeal().name;
                    })[0];

                    return meal.modifiers;
                }

                function pickCheckedModifiers(checkedModifiers) {

                    if(checkedModifiers) {

                        for (let i = 0, lenCheckedModifiers = checkedModifiers.length; i < lenCheckedModifiers; i++) {

                            for (let j = 0, lenModifiers = vm.modifiers.length; j < lenModifiers; j++) {

                                if (vm.modifiers[j].name === checkedModifiers[i].name) {

                                    vm.modifiers[j].check = true;
                                    vm.selectModifier(vm.modifiers[j]);
                                }
                            }
                        }
                    }
                }
            }]
        });
})();