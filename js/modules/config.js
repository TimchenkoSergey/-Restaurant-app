(function() {
    "use strict";

    angular
        .module("Meals")
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state("app", {
                    url: "/app",
                    template: `<header-page></header-page>
                                   <main class="main-content">
                                       <ui-view autoscroll></ui-view>
                                   </main>
                                   <footer-page></footer-page>`
                })
                .state("app.main", {
                    url: "/main",
                    template: `<a class="main-content__link main-content__link--button"
                                       ui-sref="app.main.meals"
                                       ui-sref-active="main-content__link--active">Еда</a>
                                   <a class="main-content__link main-content__link--button"
                                       ui-sref="app.main.drinks"
                                       ui-sref-active="main-content__link--active">Напитки</a>
                                   <ui-view></ui-view>`
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
                    url: "/meal",
                    template: "<meal-page id='meal'></meal-page>"
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
        });
})();