angular.module('workout', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'mainCtrl',
    templateUrl: 'views/home.html'
  })
  .state('login', {
    url: '/login',
    controller: 'mainCtrl',
    templateUrl: 'views/login.html'
  })
  .state('workout', {
    url: '/workout',
    controller: 'mainCtrl',
    templateUrl: 'views/workout-index.html'
  })
  .state('logWorkout', {
    url: '/log-workout',
    controller: 'mainCtrl',
    templateUrl: '/views/log-workout.html'
  })
})
