describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("meals list component ", function () {
        let controller,
            MealsFactory;

        beforeEach(inject(function ($componentController, _MealsFactory_) {
            MealsFactory = _MealsFactory_;
            controller   = $componentController("mealsList", { MealsFactory: MealsFactory });

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
    });

});