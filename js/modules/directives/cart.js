app.component("cartPage", {
    restrict : "E",
    replace : true,
    templateUrl : "component_templates/cart.html",
    bindings : {},
    controllerAs : "cart",
    controller : function (MealsFactory, CartFactory) {

        this.currency = MealsFactory.getCurrency();
        this.cartList = CartFactory.getCartList();
        this.total    = CartFactory.getTotalPrice();


        this.editMeal = function (meal) {
            let mealSelected = MealsFactory.setCurrentMealById(meal.id);

            if(mealSelected) {
                MealsFactory.setCurrentMealAmount(meal.amount);
                MealsFactory.setCurrentMealStatus("edit");
            }
        };
    }
});