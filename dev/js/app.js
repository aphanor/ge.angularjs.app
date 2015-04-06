var ge = angular.module('ge', ['ngRoute', 'firebase']).constant('FIREBASE_URL', 'https://shining-torch-5764.firebaseio.com/');

ge.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
	    when('/account', {
		    templateUrl: 'views/accounts.html'
	}).
	    when('/', {
		    templateUrl: 'views/landing.html'
	}).
		otherwise({
			redirectTo: '/',
			templateUrl: 'views/landing.html'
	});
	
	$locationProvider.html5Mode(true);
	
}]);