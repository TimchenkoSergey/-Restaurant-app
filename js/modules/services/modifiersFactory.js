(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("ModifiersFactory", ["CartFactory", ModifiersFactory]);

    function ModifiersFactory(CartFactory) {

        return {
            getCheckedModifiers : function () {
                let cartList = CartFactory.getCartList()[CartFactory.getIndex()];

                return cartList.modifiers;
            },

            itemHasBeenSelected : function (selectedModifiers, modifier) {
                return selectedModifiers.some((item) => modifier.name === item.name);
            },

            deleteModifier : function (selectedModifiers, modifier) {
                return selectedModifiers.filter((item) => modifier.name !== item.name);
            },

            selectModifier : function (selectedModifiers, modifier) {

                const that = this;

                if(!that.itemHasBeenSelected(selectedModifiers, modifier)) {
                    selectedModifiers.push(modifier);
                }
                else {
                    selectedModifiers = that.deleteModifier(selectedModifiers, modifier);
                }

                CartFactory.addModifiersToList(selectedModifiers);
            },

            pickCheckedModifiers : function (modifiers, selectedModifiers, checkedModifiers) {
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
        };
    }
})();
