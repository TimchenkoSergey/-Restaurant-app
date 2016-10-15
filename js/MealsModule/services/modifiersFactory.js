(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("ModifiersFactory", ModifiersFactory);

    function ModifiersFactory(CartFactory) {

        let factory = {
            getCheckedModifiers     : getCheckedModifiers,
            modifierHasBeenSelected : modifierHasBeenSelected,
            deleteModifier          : deleteModifier,
            selectModifier          : selectModifier,
            pickCheckedModifiers    : pickCheckedModifiers
        };

        return factory;

        function getCheckedModifiers() {
            let cartList = CartFactory.getCartList()[CartFactory.getIndexEditMeal()];
            return cartList.modifiers;
        }

        function modifierHasBeenSelected(selectedModifiers, modifier) {
            return selectedModifiers.some((item) => modifier.name === item.name);
        }

        function deleteModifier(selectedModifiers, modifier) {
            return selectedModifiers.filter((item) => modifier.name !== item.name);
        }

        function selectModifier(selectedModifiers, modifier) {

            if (!modifierHasBeenSelected(selectedModifiers, modifier)) {
                selectedModifiers.push(modifier);
            }
            else {
                selectedModifiers = deleteModifier(selectedModifiers, modifier);
            }

            CartFactory.addModifiersToList(selectedModifiers);
        }

        function pickCheckedModifiers(modifiers, selectedModifiers, checkedModifiers) {

            if (checkedModifiers) {
                for (let i = 0, lenCheckedModifiers = checkedModifiers.length; i < lenCheckedModifiers; i++) {

                    for (let j = 0, lenModifiers = modifiers.length; j < lenModifiers; j++) {

                        if (modifiers[j].name === checkedModifiers[i].name) {

                            modifiers[j].check = true;
                            selectModifier(selectedModifiers, modifiers[j]);
                        }
                    }
                }
            }
        }
    }
})();
