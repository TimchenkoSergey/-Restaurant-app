describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("drinks list component ", function () {
        let controller,
            MealsFactory;

        beforeEach(inject(function ($componentController, _MealsFactory_) {
            MealsFactory = _MealsFactory_;
            controller   = $componentController("drinksList", { MealsFactory: MealsFactory });

            spyOn(MealsFactory, "getMeals");
            spyOn(MealsFactory, "openMeal");
        }));

        it("should call meals factory methods",
            function () {
                MealsFactory.getMeals();
                MealsFactory.openMeal({}, "new", 1);

                expect(MealsFactory.getMeals).toHaveBeenCalled();
                expect(MealsFactory.openMeal).toHaveBeenCalled();
            });

        it("should get only soft drink",
            function () {
                controller.drinks = [
                    { name: "firstDrink",  price: 5,  tipple: true  },
                    { name: "secondDrink", price: 15, tipple: false },
                    { name: "thirdDrink",  price: 10, tipple: false }
                ];
                controller.onlySoftDrinks = true;

                expect(controller.getDrinksForView()).toEqual([
                    { name: "secondDrink", price: 15, tipple: false },
                    { name: "thirdDrink",  price: 10, tipple: false }
                ]);
            });
    });

});