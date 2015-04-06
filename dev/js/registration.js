ge.controller('registrationController', ['$scope', '$location', '$firebaseAuth', 'Authentication', '$rootScope', function($scope, $location, $firebaseAuth, Authentication, $rootScope) {
        
        $scope.accesLog = function(provider) {
	        Authentication.login(provider)
        }	

	}]
);