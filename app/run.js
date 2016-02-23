app.run(function ($rootScope, $location, Data) {
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		$rootScope.authenticated = false;
		// Get session
		Data.get('session').then(function (results) {
			if (results.uid) {
				$rootScope.authenticated = true;
				$rootScope.uid = results.uid;
				$rootScope.name = results.name;
				$rootScope.email = results.email;
			} else {
				var nextUrl = next.$$route.originalPath;
				if (nextUrl == '/signup' || nextUrl == '/login' || nextUrl == '/' || nextUrl == '/about' || nextUrl == '/work') {
					$location.path(nextUrl);
				} else if (nextUrl == '/dashboard') {
					$location.path("/login");
				}
			}
		});
		// Get all users
		Data.get('users').then(function (results) {
			if (results) {
				$rootScope.users = results;
			}
		});
		// Get all portfolio
		Data.get('portfolio').then(function (results) {
			if (results) {
				$rootScope.portfolio = results;
			}
		});
	});
});