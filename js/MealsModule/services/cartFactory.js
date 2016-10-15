(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("CartFactory", CartFactory);

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
                removeMeal         : removeMeal
            };

        return factory;

        function getModifiersPrice(modifiersArr) {
            let totalPrice = 0;

            for (let modifier of modifiersArr) {
                totalPrice += modifier.price;
            }

            return totalPrice;
        }

        function getIndexEditMeal() {
            return indexEditMeal;
        }

        function setIndexEditMeal(index) {
            indexEditMeal = index;
        }

        function getCartListCount() {
            return cartList.length;
        }

        function addModifiersToList(modif) {
            modifiers = modif;
        }

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

        function getCartList() {
            return cartList;
        }

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

        function deleteModifiers() {
            modifiers = null;
        }

        function removeMeal() {
            cartList.splice(indexEditMeal, 1);
        }
    }
})();