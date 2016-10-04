let app = angular.module("Meals", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "views/mealsList.html"
            })
            .state("meal", {
                url: "/meal",
                templateUrl: "views/mealPage.html"
            })
            .state("cart", {
                url: "/cart",
                templateUrl: "views/cartPage.html"
            });

        $urlRouterProvider.otherwise("/main");
});











