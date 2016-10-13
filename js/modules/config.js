(function() {
    "use strict";

    angular
        .module("Meals")
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("app", {
                url: "/app",
                template: "<app-page></app-page>"
            })
            .state("app.main", {
                url: "/main",
                template: "<main-page></main-page>"
            })
            .state("app.main.meals", {
                url: "/meals",
                template: "<meals-list id='mealsList'></meals-list>"
            })
            .state("app.main.drinks", {
                url: "/drinks",
                template: "<drinks-list></drinks-list>"
            })
            .state("app.meal", {
                url: "/meal/:path",
                controllerAs: "ctrl",
                controller: ["$stateParams", MealController],
                template: "<meal-page id='meal' path='{{ ctrl.path }}'></meal-page>",
            })
            .state("app.cart", {
                url: "/cart",
                template: "<cart-page id='cart'></cart-page>"
            })
            .state("error", {
                url: "/error",
                template: "<error-page></error-page>"
            });

        $urlRouterProvider.otherwise("/app/main/meals");
    }

    function MealController($stateParams) {
        this.path = $stateParams.path;
    }
})();