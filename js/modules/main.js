let app = angular.module("Meals", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider.when("/meal", {
            templateUrl: "mealPage.html"
        });

        $routeProvider.when("/cart", {
            templateUrl: "cartPage.html"
        });

        $routeProvider.when("/", {
            templateUrl: "main.html"
        });

        $routeProvider.otherwise({redirectTo: "/"});
});










