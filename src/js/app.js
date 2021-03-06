var RestaurantApp = angular.module('RestaurantApp', ['ngRoute', 'ngResource']);

RestaurantApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller:  'homeController',
        templateUrl: 'tmpl/home.html'
    })
    .when('/restaurant', {
        controller:  'restaurantController',
        templateUrl: 'tmpl/restaurant.html'
    })
    .otherwise({
        redirect: '/'
    });
    $locationProvider.html5Mode(true);
});

RestaurantApp.factory('Restaurants', function($resource){
    return $resource('https://restaurants-24bf0.firebaseio.com/Restaurants.json');
});

RestaurantApp.factory('Reviews', function($resource){
    return $resource('https://restaurants-24bf0.firebaseio.com/Restaurants/:name/Reviews.json', {name: '@name'});
});

RestaurantApp.factory('UpdateReviews', function($resource){
    return $resource('https://restaurants-24bf0.firebaseio.com/Restaurants/:name.json', {name: '@name'},{
      update: {
        method: 'PUT'
      }
    });
});