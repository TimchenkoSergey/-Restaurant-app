(function() {
    "use strict";

    angular
        .module("Meals")
        .factory("CartFactory", [CartFactory]);

    function CartFactory() {

        let cartList          = [],
            modifiers         = null,
            index             = 0,
            getModifiersPrice = function (modifiersArr) {
                let totalPrice = 0;

                for(let modifier of modifiersArr) {
                    totalPrice += modifier.price;
                }

                return totalPrice;
            },

            factory = {
                getIndex           : getIndex,
                setIndex           : setIndex,
                getCartListCount   : getCartListCount,
                addModifiersToList : addModifiersToList,
                addMealToCartList  : addMealToCartList,
                getCartList        : getCartList,
                getTotalPrice      : getTotalPrice,
                deleteModifiers    : deleteModifiers,
                removeMeal         : removeMeal
            };

        return factory;

        function getIndex() {
            return index;
        }

        function setIndex(ind) {
            index = ind;
        }

        function getCartListCount() {
            return cartList.length;
        }

        function addModifiersToList(mod) {
            modifiers = mod;
        }

        function addMealToCartList(meal, amount) {
            let newMeal = {};

            newMeal.id        = meal.id;
            newMeal.name      = meal.name;
            newMeal.price     = meal.price;
            newMeal.amount    = amount;

            if(modifiers) {
                newMeal.modifiers = modifiers.slice();
            }

            modifiers = null;
            cartList.push(newMeal);
        }

        function getCartList() {
            return cartList;
        }

        function getTotalPrice() {
            let total = 0;

            if(cartList.length > 0) {
                for(let i = 0, len = cartList.length; i < len; i++) {
                    total += cartList[i].price * cartList[i].amount;

                    if(cartList[i].modifiers) {
                        total += getModifiersPrice(cartList[i].modifiers) * cartList[i].amount;
                    }
                }
            }

            return total.toFixed(2);
        }

        function deleteModifiers() {
            modifiers = null;
        }

        function removeMeal() {
            cartList.splice(index,1);
        }
    }
})();