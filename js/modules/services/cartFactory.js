app.factory("CartFactory", function () {
    let cartList = [];
    
    return {
        getCartListCount : function () {
            return cartList.length;
        },
        
        addMealToCartList : function (meal, amount) {
            let newMeal = {};

            newMeal.id     = meal.id;
            newMeal.name   = meal.name;
            newMeal.price  = meal.price;
            newMeal.amount = amount;

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