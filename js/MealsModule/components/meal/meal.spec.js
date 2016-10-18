describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("meal component ", function () {
        let controller,
            MealsFactory,
            CartFactory;

        beforeEach(inject(function ($componentController, _CartFactory_, _MealsFactory_) {
            CartFactory  = _CartFactory_;
            MealsFactory = _MealsFactory_;
            controller   = $componentController("mealPage",
                {
                    MealsFactory : MealsFactory,
                    CartFactory  : CartFactory
                },
                {
                    path: "meals"
                }
            );
            spyOn(MealsFactory, "getCurrentMeal");
            spyOn(MealsFactory, "getCurrency");
            spyOn(MealsFactory, "getCurrentMealAmount");
            spyOn(MealsFactory, "getCurrentMealStatus");
            spyOn(CartFactory, "getCartListCount");
            spyOn(CartFactory, "addMealToCartList");
            spyOn(CartFactory, "removeMeal");
            spyOn(CartFactory, "deleteModifiers");
        }));

        it("should call cart factory and meals factory methods",
            function () {
                MealsFactory.getCurrentMeal();
                MealsFactory.getCurrency();
                MealsFactory.getCurrentMealAmount();
                MealsFactory.getCurrentMealStatus();
                CartFactory.getCartListCount();
                CartFactory.addMealToCartList({ id: "1", name: "tuco", price: 5 }, 3);
                CartFactory.removeMeal();
                CartFactory.deleteModifiers();

                expect(MealsFactory.getCurrentMeal).toHaveBeenCalled();
                expect(MealsFactory.getCurrency).toHaveBeenCalled();
                expect(MealsFactory.getCurrentMealAmount).toHaveBeenCalled();
                expect(MealsFactory.getCurrentMealStatus).toHaveBeenCalled();
                expect(CartFactory.getCartListCount).toHaveBeenCalled();
                expect(CartFactory.addMealToCartList).toHaveBeenCalled();
                expect(CartFactory.removeMeal).toHaveBeenCalled();
                expect(CartFactory.deleteModifiers).toHaveBeenCalled();
            });
    });

});