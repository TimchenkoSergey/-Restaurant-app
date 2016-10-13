(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("ModifiersFactory", ["CartFactory", ModifiersFactory]);

    function ModifiersFactory(CartFactory) {

        let factory = {
            getCheckedModifiers  : getCheckedModifiers,
            itemHasBeenSelected  : itemHasBeenSelected,
            deleteModifier       : deleteModifier,
            selectModifier       : selectModifier,
            pickCheckedModifiers : pickCheckedModifiers
        };

        return factory;

        function getCheckedModifiers() {
                let cartList = CartFactory.getCartList()[CartFactory.getIndex()];

                return cartList.modifiers;
            }

        function itemHasBeenSelected(selectedModifiers, modifier) {
                return selectedModifiers.some((item) => modifier.name === item.name);
            }

        function deleteModifier(selectedModifiers, modifier) {
                return selectedModifiers.filter((item) => modifier.name !== item.name);
            }

        function selectModifier(selectedModifiers, modifier) {

                const that = this;

                if(!that.itemHasBeenSelected(selectedModifiers, modifier)) {
                    selectedModifiers.push(modifier);
                }
                else {
                    selectedModifiers = that.deleteModifier(selectedModifiers, modifier);
                }

                CartFactory.addModifiersToList(selectedModifiers);
            }

        function pickCheckedModifiers(modifiers, selectedModifiers, checkedModifiers) {
                const that = this;

                if(checkedModifiers) {

                    for (let i = 0, lenCheckedModifiers = checkedModifiers.length; i < lenCheckedModifiers; i++) {

                        for (let j = 0, lenModifiers = modifiers.length; j < lenModifiers; j++) {

                            if (modifiers[j].name === checkedModifiers[i].name) {

                                modifiers[j].check = true;
                                that.selectModifier(selectedModifiers, modifiers[j]);
                            }
                        }
                    }
                }
            }
    }
})();
