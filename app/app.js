var app = angular.module('authApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
		.when('/logout', {
			title: 'Logout',
			templateUrl: 'partials/login.html',
			controller: 'logoutCtrl'
		})
		.when('/signup', {
			title: 'Signup',
			templateUrl: 'partials/signup.html',
			controller: 'authCtrl'
		})
		.when('/dashboard', {
			title: 'Dashboard',
			templateUrl: 'partials/dashboard.html',
			controller: 'authCtrl'
		})
		.when('/', {
			title: 'Home',
			templateUrl: 'pages/home.html',
			controller: 'frontCtrl',
			role: '0'
		})
		.when('/about', {
			title: 'About',
			templateUrl: 'pages/about.html',
			controller: 'frontCtrl',
			role: '0'
		})
		.when('/work', {
			title: 'Work',
			templateUrl: 'pages/work.html',
			controller: 'frontCtrl',
			role: '0'
		})
		.otherwise({
			redirectTo: '/'
		});
		
		// $locationProvider.html5Mode(true);
  }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.email = results.email;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    /*if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/");
                    }*/
                }
            });
        });
    });