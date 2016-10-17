describe("Meals module services, ", function () {

    beforeEach(module("Meals"));

    describe("modifiers factory ", function () {
        let ModifiersFactory,
            CartFactory,
            meals = [
                { id: "1", name: "first",  price: 10 },
                { id: "2", name: "second", price: 20 },
                { id: "3", name: "third",  price: 30 }
            ],
            modifiers = [
                { name: "first",  price: 25, check: false },
                { name: "second", price: 10, check: false },
                { name: "third",  price: 15, check: false }
            ];

        beforeEach(inject(function (_ModifiersFactory_, _CartFactory_) {
            ModifiersFactory = _ModifiersFactory_;
            CartFactory      = _CartFactory_;
        }));


        it("should call cart factory methods",
            function () {
            spyOn(CartFactory, "addModifiersToList");
            spyOn(CartFactory, "addMealToCartList");
            spyOn(CartFactory, "setIndexEditMeal");

            CartFactory.addModifiersToList([modifiers[0]]);
            CartFactory.addMealToCartList(meals[0], 3);
            CartFactory.setIndexEditMeal(0);

            expect(CartFactory.addModifiersToList).toHaveBeenCalled();
            expect(CartFactory.addMealToCartList).toHaveBeenCalled();
            expect(CartFactory.setIndexEditMeal).toHaveBeenCalled();
        });

        it("should get checked modifiers",
            function () {
            CartFactory.addModifiersToList([modifiers[0]]);
            CartFactory.addMealToCartList(meals[0], 3);
            CartFactory.setIndexEditMeal(0);


            expect(ModifiersFactory.getCheckedModifiers()).toEqual([{
                name: "first",
                price: 25,
                check: false
            }]);
        });

        it("should get true if modifier has been selected else false",
            function () {
            expect(ModifiersFactory.modifierHasBeenSelected([
                modifiers[0],
                modifiers[1]
                ],
                { name: "first", price: 10 }
            )).toBeTruthy();

            expect(ModifiersFactory.modifierHasBeenSelected(
                [
                    modifiers[0],
                    modifiers[1]
                ],
                { name: "third", price: 20 }
            )).toBeFalsy();
        });

        it("should delete modifier",
            function () {
            expect(ModifiersFactory.deleteModifier(modifiers, { name: "first", price: 25 }))
                .toEqual([{ name: "second", price: 10, check: false },
                         { name: "third",  price: 15, check: false }]);
        });

        it("should delete modifier if modifier has been selected else select modifier",
            function () {
                let selectedModifiers = [];

                ModifiersFactory.selectModifier(selectedModifiers, modifiers[0]);
                
                expect(selectedModifiers).toEqual([{ name: "first", price: 25, check: false }]);
        });

        it("should pick checked modifiers when meal status is 'edit'",
            function () {

            ModifiersFactory.pickCheckedModifiers(modifiers, [],
                [{ name: "first", price: 25, check: false }]);

            expect(modifiers).toEqual([
                { name: "first",  price: 25, check: true  },
                { name: "second", price: 10, check: false },
                { name: "third",  price: 15, check: false }
            ]);
        });
    });

});