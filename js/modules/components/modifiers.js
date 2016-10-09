app.component("modifiersPage", {
    templateUrl : "component_templates/modifiersPage.html",
    bindings : {
        currency: "="
    },
    controllerAs : "mod",
    controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {
        "use strict";

        const self               = this;
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

                        for (let j = 0, len = self.modifiers.length; j < len; j++) {

                            if (self.modifiers[j].name === checkedModifiers[i].name) {

                                self.modifiers[j].check = true;
                                self.selectModifier(self.modifiers[j]);
                            }
                        }
                    }
                }
            }

        self.modifiers = MealsFactory.getModifiers();

        self.selectModifier = function (modifier) {

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