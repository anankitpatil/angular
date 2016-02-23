var app = angular.module('authApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
		.when('/logout', {
			title: 'Logout',
			templateUrl: 'partials/login.html',
			controller: 'authCtrl'
		})
		.when('/signup', {
			title: 'Signup',
			templateUrl: 'partials/signup.html',
			controller: 'authCtrl'
		})
		.when('/dashboard', {
			title: 'Dashboard',
			templateUrl: 'partials/dashboard.html',
			controller: 'authCtrl',
			activetab: 'dashboard'
		})
		.when('/dashboard/user', {
			title: 'User',
			templateUrl: 'partials/user.html',
			controller: 'authCtrl',
			activetab: 'user'
		})
		.when('/dashboard/user/:uid', {
			title: 'User Profile',
			templateUrl: 'partials/user.html',
			controller: 'authCtrl'
		})
		.when('/dashboard/portfolio', {
			title: 'Portfolio',
			templateUrl: 'partials/portfolio.html',
			controller: 'authCtrl',
			activetab: 'portfolio'
		})
		.when('/', {
			title: 'Home',
			templateUrl: 'pages/home.html',
			controller: 'authCtrl',
			role: '0'
		})
		.when('/about', {
			title: 'About',
			templateUrl: 'pages/about.html',
			controller: 'authCtrl',
			activetab: 'about',
			role: '0'
		})
		.when('/work', {
			title: 'Work',
			templateUrl: 'pages/work.html',
			controller: 'authCtrl',
			activetab: 'work',
			role: '0'
		})
		.otherwise({
			redirectTo: '/'
		});
		
		$locationProvider.html5Mode(true);
  }]);