app.factory("CartFactory", function () {
    "use strict";

    let cartList          = [],
        modifiers         = null,
        getModifiersPrice = function (modifiersArr) {
            let totalPrice = 0;

            for(let modifier of modifiersArr) {
                totalPrice += modifier.price;
            }

            return totalPrice;
        };
    
    return {
        getCartListCount : function () {
            return cartList.length;
        },

        addModifiersToList : function (mod) {
            modifiers = mod;
        },
        
        addMealToCartList : function (meal, amount) {
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
        },

        getCartList : function () {
            return cartList;
        },

        getTotalPrice : function () {
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
        },

        removeMeal : function (meal) {

            for(let i = 0, len = cartList.length; i < len; i++) {
                if(cartList[i].id === meal.id) {
                    cartList.splice(i, 1);
                    return true;
                }
            }

            return false;
        }
    };
});