// Create Angular
angular.module('portfolio', ['ngRoute']);

// Configure the Route
angular.module('portfolio').config(function($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: '/templates/me/main.html'
    })
    .when('/me', {
        templateUrl: '/templates/me/main.html'
    })
    .when('/skills', {
        templateUrl: '/templates/skills/main.html'
    })
    .when('/projects', {
        templateUrl: 'templates/projects/main.html'
    })
    .when('/contactme', {
        templateUrl: 'templates/contactme/main.html'
    })
    .otherwise({
        redirectTo: '/templates/me/main.html'
    })
})