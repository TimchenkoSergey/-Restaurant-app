describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("modifiers component ", function () {
        let controller,
            MealsFactory,
            ModifiersFactory;

        beforeEach(inject(function ($componentController, _ModifiersFactory_, _MealsFactory_) {
            ModifiersFactory  = _ModifiersFactory_;
            MealsFactory      = _MealsFactory_;
            controller        = $componentController("modifiersPage",
                {
                    MealsFactory     : MealsFactory,
                    ModifiersFactory : ModifiersFactory
                },
                {
                    currency: "$"
                }
            );
            spyOn(MealsFactory, "getModifiers");
            spyOn(ModifiersFactory, "selectModifier");
            spyOn(ModifiersFactory, "getCheckedModifiers");
            spyOn(ModifiersFactory, "pickCheckedModifiers");
        }));

        it("should call modifiers factory and meals factory methods",
            function () {
                MealsFactory.getModifiers();
                ModifiersFactory.selectModifier([], {});
                ModifiersFactory.getCheckedModifiers();
                ModifiersFactory.pickCheckedModifiers([], []);

                expect(MealsFactory.getModifiers).toHaveBeenCalled();
                expect(ModifiersFactory.selectModifier).toHaveBeenCalled();
                expect(ModifiersFactory.getCheckedModifiers).toHaveBeenCalled();
                expect(ModifiersFactory.pickCheckedModifiers).toHaveBeenCalled();
            });

        it("should clean pick modifiers",
            function () {
                controller.modifiers = [{ name: "first",  check: true  },
                                        { name: "second", check: false },
                                        { name: "third",  check: true  }];

                controller.cleanPickModifiers();

                expect(controller.modifiers).toEqual([
                    { name: "first",  check: false },
                    { name: "second", check: false },
                    { name: "third",  check: false }]);
            });
    });

});