app.component("cartPage", {
    templateUrl : "component_templates/cartPage.html",
    bindings : {},
    controllerAs : "cart",
    controller : ["MealsFactory", "CartFactory", function (MealsFactory, CartFactory) {
        "use strict";

        this.currency = MealsFactory.getCurrency();
        this.cartList = CartFactory.getCartList();
        this.total = CartFactory.getTotalPrice();


        this.editMeal = function (meal) {
            MealsFactory.setCurrentMealById(meal.id);
            MealsFactory.setCurrentMealAmount(meal.amount);
            MealsFactory.setCurrentMealStatus("edit");
        };
    }]
});