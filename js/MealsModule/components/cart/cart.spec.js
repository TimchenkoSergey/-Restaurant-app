describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("cart component ", function () {
        let controller,
            MealsFactory,
            CartFactory;

        beforeEach(inject(function ($componentController, _CartFactory_, _MealsFactory_) {
            CartFactory  = _CartFactory_;
            MealsFactory = _MealsFactory_;
            controller   = $componentController("cartPage",
                {
                    MealsFactory : MealsFactory,
                    CartFactory  : CartFactory
                });
            spyOn(MealsFactory, "getCurrency");
            spyOn(MealsFactory, "setCurrentMealById");
            spyOn(MealsFactory, "setCurrentMealAmount");
            spyOn(MealsFactory, "setCurrentMealStatus");
            spyOn(CartFactory, "getCartList");
            spyOn(CartFactory, "getTotalPrice");
            spyOn(CartFactory, "setIndexEditMeal");
        }));

        it("should call cart factory and meals factory methods",
            function () {
                MealsFactory.getCurrency();
                MealsFactory.setCurrentMealById(0);
                MealsFactory.setCurrentMealAmount(1);
                MealsFactory.setCurrentMealStatus("edit");
                CartFactory.getCartList();
                CartFactory.getTotalPrice();
                CartFactory.setIndexEditMeal(1);

                expect(MealsFactory.getCurrency).toHaveBeenCalled();
                expect(MealsFactory.setCurrentMealById).toHaveBeenCalled();
                expect(MealsFactory.setCurrentMealAmount).toHaveBeenCalled();
                expect(MealsFactory.setCurrentMealStatus).toHaveBeenCalled();
                expect(CartFactory.getCartList).toHaveBeenCalled();
                expect(CartFactory.getTotalPrice).toHaveBeenCalled();
                expect(CartFactory.setIndexEditMeal).toHaveBeenCalled();
            });
    });

});