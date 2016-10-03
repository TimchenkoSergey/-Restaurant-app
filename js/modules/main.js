let app = angular.module("Meals", ["ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider.when("/meal", {
            templateUrl: "views/mealPage.html"
        });

        $routeProvider.when("/cart", {
            templateUrl: "views/cartPage.html"
        });

        $routeProvider.when("/", {
            templateUrl: "main.html"
        });

        $routeProvider.otherwise({redirectTo: "/"});
});










