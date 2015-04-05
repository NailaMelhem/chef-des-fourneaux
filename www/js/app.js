// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// 
// , 'chefdesfourneaux.controllers'

urlWebService="http://localhost/webservice/public/index.php";
urlImg="../../../../img/";

var chefdesfourneaux = angular.module('chefdesfourneaux', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'home-tab': {
        templateUrl: "templates/search.html"
      }
    }
  })
  .state('app.facts', {
      url: "/facts",
      views: {
        'home-tab': {
          templateUrl: "templates/facts.html"
        }
      }
    })
    .state('app.facts2', {
      url: "/facts2",
      views: {
        'home-tab': {
          templateUrl: "templates/facts2.html"
        }
      }
    })

  .state('app.browse', {
    url: "/browse",
    views: {
      'about-tab': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  .state('app.user', {
    url: "/user",
    views: {
      'user-tab': {
        templateUrl: "templates/user.html",
        controller: "UserController"
      }
    }
  })
  /*.state('app.login', {
      url: "/login",
      views: {
        'user-tab': {
          templateUrl: "templates/User/login.html",
        }
      }
    })*/
  .state('app.signin', {
      url: "/signin",
      views: {
        'user-tab': {
          templateUrl: "templates/User/signin.html",
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
      })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.recetteAll', {
    url: "/recetteAll",
      views: {
        'menuContent': {
      templateUrl: "templates/recetteAll.html",
      controller: 'RecetteAllController'
        }
      }
    }
  );
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/recetteAll');
});

