let app = angular.module("Meals", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("main", {
                url: "/main",
                template: `<a class="main-content__link main-content__link--button"
                               ui-sref="main.meals"
                               ui-sref-active="main-content__link--active">Еда</a>
                           <a class="main-content__link main-content__link--button"
                               ui-sref="main.drinks"
                               ui-sref-active="main-content__link--active">Напитки</a>
                           <ui-view></ui-view>`
            })
            .state("main.meals", {
                url: "/meals",
                template: "<meals-list id='mealsList'></meals-list>"
            })
            .state("meal", {
                url: "/meal",
                template: "<meal-page id='meal'></meal-page>"
            })
            .state("cart", {
                url: "/cart",
                template: "<cart-page id='cart'></cart-page>"
            })
            .state("main.drinks", {
                url: "/drinks",
                template: "<drinks-list></drinks-list>"
            });

        $urlRouterProvider.otherwise("/main/meals");
});











