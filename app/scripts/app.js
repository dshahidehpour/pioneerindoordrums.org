'use strict';

angular
  .module('pioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html'
      })
      .when('/history', {
        templateUrl: 'views/history.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/staff', {
        templateUrl: 'views/staff.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/auditions', {
        templateUrl: 'views/auditions.html',
        controller: 'AuditionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
