  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular.module('starter', ['ionic'])

  .run(function($ionicPlatform) {
       $ionicPlatform.ready(function() {
          // Hide the accessory bar by default 
          // (remove this to show the accessory bar above the keyboard for form inputs)
          if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          }
          if(window.StatusBar) {
            StatusBar.styleDefault();
          }
        });
  })

  .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/')
          $stateProvider
          .state('home', {
                 // url fragment with optional parameters
                 url: '/',
                 templateUrl: 'home.html'
          })
          .state('newEvent', {
                 // url fragment with optional parameters
                 url: '/newEvent',
                 // Returns the path to the html template
                 // that should be used by uiView.
                 templateUrl: 'newEvent.html'
          })
          .state('viewEvents', {
                 // url fragment with optional parameters
                 url: '/viewEvents',
                 // Returns the path to the html template
                 // that should be used by uiView.
                 templateUrl: 'viewEvents.html'
          })
          .state('event', {
                 // url fragment with optional parameters
                 url: '/event',
                 // Returns the path to the html template
                 // that should be used by uiView.
                 templateUrl: 'event.html'
          })
  });


