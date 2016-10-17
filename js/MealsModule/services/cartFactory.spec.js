describe("Meals module services, ", function () {

    beforeEach(module("Meals"));

    describe("cart factory ", function () {
        let CartFactory,
            meals = [
                { id: "1", name: "first",  price: 10 },
                { id: "2", name: "second", price: 20 },
                { id: "3", name: "third",  price: 30 }
            ],
            modifiers = [
                { name: "first",  price: 25 },
                { name: "second", price: 10 },
                { name: "third",  price: 15 }
            ];

        beforeEach(inject(function (_CartFactory_) {
            CartFactory = _CartFactory_;
        }));

        it("should get index of edit meal",
            function () {
            CartFactory.setIndexEditMeal(1);
            expect(CartFactory.getIndexEditMeal()).toEqual(1);
        });

        it("should get modifiers price",
            function () {
            expect(CartFactory.getModifiersPrice(modifiers)).toEqual(50);
        });

        it("should get cart list and cart list count",
            function () {

            CartFactory.addMealToCartList(meals[0], 3);

            expect(CartFactory.getCartList()).toEqual([{
                id: "1",
                name: "first",
                price: 10,
                amount: 3
            }]);
                
            expect(CartFactory.getCartListCount()).toEqual(1);
        });

        it("should get total price of cart",
            function () {

            CartFactory.addMealToCartList(meals[0], 3);

            CartFactory.addModifiersToList([modifiers[0]]);

            CartFactory.addMealToCartList(meals[1], 2);

            expect(CartFactory.getTotalPrice()).toEqual("120.00");
        });

        it("should remove meal on edit index",
            function () {

            CartFactory.addMealToCartList(meals[0], 3);

            CartFactory.addMealToCartList(meals[1], 2);

            CartFactory.setIndexEditMeal(1);
            CartFactory.removeMeal();

            expect(CartFactory.getCartList()).toEqual([{
                id: "1",
                name: "first",
                price: 10,
                amount: 3
            }]);
        });

        it("should add modifiers for meal",
            function () {

            CartFactory.addModifiersToList([modifiers[0]]);

            CartFactory.addMealToCartList(meals[0], 3);

            expect(CartFactory.getCartList()).toEqual([{
                id: "1",
                name: "first",
                price: 10,
                amount: 3,
                modifiers: [{
                    name: "first",
                    price: 25
                }]
            }]);
        });

        it("should remove modifiers",
            function () {

            CartFactory.addModifiersToList([modifiers[0]]);

            CartFactory.deleteModifiers();

            CartFactory.addMealToCartList(meals[0], 3);

            expect(CartFactory.getCartList()).toEqual([{
                id: "1",
                name: "first",
                price: 10,
                amount: 3
            }]);
        });
    });

});