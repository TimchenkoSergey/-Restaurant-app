(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("ModifiersFactory", ModifiersFactory);

    /**
     * @ngdoc service
     * @name Meals.ModifiersFactory
     * @requires Meals.CartFactory
     *
     * @description
     * Factory work with modifiers.
     *
     **/
    function ModifiersFactory(CartFactory) {

        let factory = {
            getCheckedModifiers     : getCheckedModifiers,
            modifierHasBeenSelected : modifierHasBeenSelected,
            deleteModifier          : deleteModifier,
            selectModifier          : selectModifier,
            pickCheckedModifiers    : pickCheckedModifiers
        };

        return factory;

        /**
         * @ngdoc method
         * @name Meals.ModifiersFactory#getCheckedModifiers
         * @methodOf Meals.ModifiersFactory
         * @description
         * Return array with modifiers.
         *
         * @return {object[]} Array of modifiers objects.
         **/
        function getCheckedModifiers() {
            let cartList = CartFactory.getCartList()[CartFactory.getIndexEditMeal()];
            return cartList.modifiers;
        }

        /**
         * @ngdoc method
         * @name Meals.ModifiersFactory#modifierHasBeenSelected
         * @methodOf Meals.ModifiersFactory
         * @description
         * Return true if modifier has been selected, or false if no.
         *
         * @param {object[]} selectedModifiers Array with selected modifiers.
         * @param {object} modifier Modifier object.
         * @return {boolean} True if modifier has been selected, else false.
         **/
        function modifierHasBeenSelected(selectedModifiers, modifier) {
            return selectedModifiers.some((item) => modifier.name === item.name);
        }

        /**
         * @ngdoc method
         * @name Meals.ModifiersFactory#deleteModifier
         * @methodOf Meals.ModifiersFactory
         * @description
         * Delete modifier at array selected modifiers.
         *
         * @param {object[]} selectedModifiers Array with selected modifiers.
         * @param {object} modifier Modifier object who be deleted.
         * @return {object[]} New array of modifiers.
         **/
        function deleteModifier(selectedModifiers, modifier) {
            return selectedModifiers.filter((item) => modifier.name !== item.name);
        }

        /**
         * @ngdoc method
         * @name Meals.ModifiersFactory#selectModifier
         * @methodOf Meals.ModifiersFactory
         * @description
         * Add modifier if it not has been selected, else delete modifier at
         * array of selected modifiers.
         *
         * @param {object[]} selectedModifiers Array with selected modifiers.
         * @param {object} modifier Modifier object.
         * @return {object[]} Array with selected modifiers.
         **/
        function selectModifier(selectedModifiers, modifier) {
            let selectedModif = selectedModifiers.slice();

            if (!modifierHasBeenSelected(selectedModif, modifier)) {
                selectedModif.push(modifier);
            }
            else {
                selectedModif = deleteModifier(selectedModif, modifier);
            }

            CartFactory.addModifiersToList(selectedModif);

            return selectedModif;
        }

        /**
         * @ngdoc method
         * @name Meals.ModifiersFactory#pickCheckedModifiers
         * @methodOf Meals.ModifiersFactory
         * @description
         * Pick all checked modifiers.
         *
         * @param {object[]} modifiers All modifiers of current meal.
         * @param {object[]} checkedModifiers Array with checked modifiers.
         * @return {object[]} Array with checked and picked modifiers.
         **/
        function pickCheckedModifiers(modifiers, checkedModifiers) {
            let selectedModif = [];

            if (checkedModifiers) {
                for (let i = 0, lenCheckedModifiers = checkedModifiers.length; i < lenCheckedModifiers; i++) {

                    for (let j = 0, lenModifiers = modifiers.length; j < lenModifiers; j++) {

                        if (modifiers[j].name === checkedModifiers[i].name) {

                            modifiers[j].check = true;
                            selectedModif.push(modifiers[j]);
                        }
                    }
                }
            }
            return selectedModif
        }
    }
})();
