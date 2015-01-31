'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.recipes',
  'myApp.addRecipe',
  'myApp.version',
  'restangular'

]).
config(['$routeProvider', function($routeProvider, RestangularProvider) {
  $routeProvider.otherwise({redirectTo: '/recipes'});

  RestangularProvider.setBaseUrl('http://localhost:8001')

}]);
