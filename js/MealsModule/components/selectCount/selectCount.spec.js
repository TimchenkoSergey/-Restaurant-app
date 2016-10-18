describe("Meals module components, ", function () {

    beforeEach(module("Meals"));

    describe("select count component ", function () {
        let controller;

        beforeEach(inject(function ($componentController) {
            controller = $componentController("selectCount", {}, {select: 0});
        }));

        it("should set select count",
            function () {
                controller.selectNum(3);

                expect(controller.activeNum(3)).toBeTruthy();
            });

        it("should return true if num is select count else false",
            function () {
                controller.selectNum(3);

                expect(controller.activeNum(3)).toBeTruthy();
                expect(controller.activeNum(4)).toBeFalsy();
            });
    });

});