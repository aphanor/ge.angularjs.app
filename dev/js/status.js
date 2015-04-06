ge.controller('loginController', ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Authentication', 'FIREBASE_URL', '$firebaseObject', function($scope, $rootScope, $firebaseAuth, $location, Authentication, FIREBASE_URL, $firebaseObject){
	
	var ref = new Firebase(FIREBASE_URL);
	$scope.auth = $firebaseAuth(ref)
	
	$scope.auth.$onAuth(function(authData) {
		if(authData) {
	        
	        if(authData.facebook) {
		        $rootScope.currentUser = authData.facebook.displayName;
		        $rootScope.image = authData.facebook.cachedUserProfile.picture.data.url;
	        } 
	        else if(authData.twitter) {
		        $rootScope.currentUser = authData.twitter.displayName;
		        $rootScope.image = authData.twitter.cachedUserProfile.profile_image_url;
	        } 
	        else if(authData.google) {
		        $rootScope.currentUser = authData.google.displayName;
		        $rootScope.image = authData.google.cachedUserProfile.picture;
	        }
	        
	    } else {
		    $rootScope.currentUser = null;
		}
    });
    
	$scope.logOut = function() {
		Authentication.logout();
		$location.path('/');
	}	
    
}]);