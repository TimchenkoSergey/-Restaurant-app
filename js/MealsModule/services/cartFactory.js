(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("CartFactory", CartFactory);

    /**
     * @ngdoc service
     * @name Meals.CartFactory
     *
     * @description
     * Factory work with cart.
     *
     **/
    function CartFactory() {

        let cartList          = [],
            modifiers         = null,
            indexEditMeal     = 0,

            factory = {
                getIndexEditMeal   : getIndexEditMeal,
                setIndexEditMeal   : setIndexEditMeal,
                getCartListCount   : getCartListCount,
                addModifiersToList : addModifiersToList,
                addMealToCartList  : addMealToCartList,
                getCartList        : getCartList,
                getTotalPrice      : getTotalPrice,
                deleteModifiers    : deleteModifiers,
                removeMeal         : removeMeal,
                getModifiersPrice  : getModifiersPrice
            };

        return factory;

        /**
         * @ngdoc method
         * @name Meals.CartFactory#getModifiersPrice
         * @methodOf Meals.CartFactory
         * @description
         * Return total price of modifiers.
         *
         * @param {object[]} modifiersArr Array of modifiers objects.
         * @return {number} Total price.
         **/
        function getModifiersPrice(modifiersArr) {
            let totalPrice = 0;

            for (let modifier of modifiersArr) {
                totalPrice += modifier.price;
            }

            return totalPrice;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#getIndexEditMeal
         * @methodOf Meals.CartFactory
         * @description
         * Return index fo edit meal.
         *
         * @return {number} Index of edit meal.
         **/
        function getIndexEditMeal() {
            return indexEditMeal;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#setIndexEditMeal
         * @methodOf Meals.CartFactory
         * @description
         * Set index of edit meal.
         *
         * @param {number} index Index of edit meal.
         **/
        function setIndexEditMeal(index) {
            indexEditMeal = index;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#getCartListCount
         * @methodOf Meals.CartFactory
         * @description
         * Return count of elements in cart list.
         *
         * @return {number} Cart list length.
         **/
        function getCartListCount() {
            return cartList.length;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#addModifiersToList
         * @methodOf Meals.CartFactory
         * @description
         * Add modifiers to list.
         *
         * @param {object[]} modif Array with modifiers objects.
         **/
        function addModifiersToList(modif) {
            modifiers = modif;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#addMealToCartList
         * @methodOf Meals.CartFactory
         * @description
         * Add meal to cart list.
         *
         * @param {object} meal Meal object.
         * @param {number} amount Amount of meal.
         **/
        function addMealToCartList(meal, amount) {
            let newMeal = {};

            newMeal.id        = meal.id;
            newMeal.name      = meal.name;
            newMeal.price     = meal.price;
            newMeal.amount    = amount;

            if (modifiers) {
                newMeal.modifiers = modifiers.slice();
            }

            modifiers = null;
            cartList.push(newMeal);
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#getCartList
         * @methodOf Meals.CartFactory
         * @description
         * Return cart list.
         *
         * @return {object[]} Cart list.
         **/
        function getCartList() {
            return cartList;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#getTotalPrice
         * @methodOf Meals.CartFactory
         * @description
         * Return cart list total price.
         *
         * @return {string} Cart list total price.
         **/
        function getTotalPrice() {
            let totalPrice = 0;

            if (cartList.length > 0) {
                for (let i = 0, len = cartList.length; i < len; i++) {

                    totalPrice += cartList[i].price * cartList[i].amount;

                    if (cartList[i].modifiers) {
                        totalPrice += getModifiersPrice(cartList[i].modifiers) * cartList[i].amount;
                    }
                }
            }

            return totalPrice.toFixed(2);
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#deleteModifiers
         * @methodOf Meals.CartFactory
         * @description
         * Reset modifiers value.
         **/
        function deleteModifiers() {
            modifiers = null;
        }

        /**
         * @ngdoc method
         * @name Meals.CartFactory#removeMeal
         * @methodOf Meals.CartFactory
         * @description
         * Remove edit meal of cart list.
         **/
        function removeMeal() {
            cartList.splice(indexEditMeal, 1);
        }
    }
})();