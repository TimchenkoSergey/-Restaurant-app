describe("Meals module services, ", function () {

    beforeEach(module("Meals"));

    describe("meals factory ", function () {
        let MealsFactory,
            $httpBackend,
            respondData = {
                type: "meals",
                currency: "$",
                products: [
                    {
                        id: "54368f5c3e45b99286332e64",
                        name: "Soprano",
                        price: 27.84,
                        tax: 0.26,
                        quantity: 20,
                        image: "img/product1.jpg",
                        modifiers: [
                            {
                                id: "54368f5c08dcb5aa210ba190",
                                name: "Stucco",
                                price: 0.48,
                                tax: 1.28
                            },
                            {
                                id: "54368f5c0af353375101c5d2",
                                name: "Pasturia",
                                price: 2.26,
                                tax: 2.85
                            },
                            {
                                id: "54368f5ca7384f8a958ffc88",
                                name: "Gluid",
                                price: 3.99,
                                tax: 2.44
                            },
                            {
                                id: "54368f5cf2474e8ec87ed12c",
                                name: "Cablam",
                                price: 2.02,
                                tax: 2.05
                            }
                        ]
                    }
                ],
                drinks: [
                    {
                        id: "54368f5c3e45b99286332e641",
                        name: "Rum",
                        price: 27.84,
                        tax: 0.26,
                        quantity: 20,
                        image: "img/tipple.jpg",
                        tipple: true
                    }
                ]
            };


        beforeEach(inject(function (_MealsFactory_, _$httpBackend_) {
            MealsFactory = _MealsFactory_;
            $httpBackend = _$httpBackend_;

            $httpBackend.whenGET("/meals.json").respond(respondData);
        }));

        it("should get currency, array of meals and drinks",
            function () {
                MealsFactory.getMeals().then(function (data) {
                    expect(data.currency).toEqual("$");
                    expect(data.products).toEqual([
                        {
                            id: "54368f5c3e45b99286332e64",
                            name: "Soprano",
                            price: 27.84,
                            tax: 0.26,
                            quantity: 20,
                            image: "img/product1.jpg",
                            modifiers: [
                                {
                                    id: "54368f5c08dcb5aa210ba190",
                                    name: "Stucco",
                                    price: 0.48,
                                    tax: 1.28
                                },
                                {
                                    id: "54368f5c0af353375101c5d2",
                                    name: "Pasturia",
                                    price: 2.26,
                                    tax: 2.85
                                },
                                {
                                    id: "54368f5ca7384f8a958ffc88",
                                    name: "Gluid",
                                    price: 3.99,
                                    tax: 2.44
                                },
                                {
                                    id: "54368f5cf2474e8ec87ed12c",
                                    name: "Cablam",
                                    price: 2.02,
                                    tax: 2.05
                                }
                            ]
                        }
                    ]);
                    expect(data.drinks).toEqual([
                        {
                            id: "54368f5c3e45b99286332e641",
                            name: "Rum",
                            price: 27.84,
                            tax: 0.26,
                            quantity: 20,
                            image: "img/tipple.jpg",
                            tipple: true
                        }
                    ]);
                });
            });

        it("should get current meal modifiers",
            function () {
                MealsFactory.setCurrentMeal(
                    { name: "gogol", modifiers: [{ name: "soprano" }]}
                );

                expect(MealsFactory.getModifiers()).toEqual([{ name: "soprano" }]);
            });

        it("should get current meal",
            function () {
                MealsFactory.setCurrentMeal({ name: "gogol" });

                expect(MealsFactory.getCurrentMeal()).toEqual({ name: "gogol" });
            });

        it("should get current meal status",
            function () {
                MealsFactory.setCurrentMealStatus("new");

                expect(MealsFactory.getCurrentMealStatus()).toEqual("new");
            });

        it("should get current meal amount",
            function () {
                MealsFactory.setCurrentMealAmount(4);

                expect(MealsFactory.getCurrentMealAmount()).toEqual(4);
            });

        it("should get currency",
            function () {
                MealsFactory.getMeals().then(function () {
                    expect(MealsFactory.getCurrency()).toEqual("$");
                });
            });

        it("should set current meal by id",
            function () {
                MealsFactory.getMeals().then(function () {
                    MealsFactory.setCurrentMealById("54368f5c3e45b99286332e641");

                    expect(MealsFactory.getCurrentMeal()).toEqual({
                        id: "54368f5c3e45b99286332e641",
                        name: "Rum",
                        price: 27.84,
                        tax: 0.26,
                        quantity: 20,
                        image: "img/tipple.jpg",
                        tipple: true
                    });
                });
            });
    });

});