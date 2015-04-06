ge.factory('Authentication', ['$location', '$firebaseAuth', '$firebase', 'FIREBASE_URL', '$firebaseObject', '$rootScope', '$window', function($location, $firebaseAuth, $firebase, FIREBASE_URL, $firebaseObject, $rootScope, $window) {
		
		var ref = new Firebase(FIREBASE_URL);
		var user = $firebaseAuth(ref);
		
		var Authentication = {
			login: function(provider) {
				
				var ref = new Firebase(FIREBASE_URL);
				
				return ref.authWithOAuthPopup(provider, function(error, authData) {
					if (error) {
						console.log("Login Failed!", error);
					} else {
						console.log("Authenticated successfully with payload:", authData);
						
						var ref = new Firebase(FIREBASE_URL + 'users');
						
						var firebaseUsers = $firebaseObject(ref);
						
						var id = authData.uid;
						
						
						if (provider == 'facebook') {
							var userInfo = {
								date: Firebase.ServerValue.TIMESTAMP,
								regUser: authData.facebook.id,
								name: authData.facebook.displayName,
								image: authData.facebook.cachedUserProfile.picture.data.url
							};
						}
						else if(provider == 'twitter') {
							var userInfo = {
								date: Firebase.ServerValue.TIMESTAMP,
								regUser: authData.twitter.id,
								name: authData.twitter.displayName,
								image: authData.twitter.cachedUserProfile.profile_image_url
							};
						}
						else {
							var userInfo = {
								date: Firebase.ServerValue.TIMESTAMP,
								regUser: authData.google.id,
								name: authData.google.displayName,
								image: authData.google.cachedUserProfile.picture
							};
						}
				
				        //ref.set(userInfo)};
				        ref.child(id).set(userInfo);
						
						//$location.path('/accounts');
						//$rootScope.$apply();
						$window.location.href = '/accounts.html';
						$rootScope.currentUser = authData;
					}
				});
			},
			logout: function() {
				var ref = new Firebase(FIREBASE_URL);
				var auth = $firebaseAuth(ref);
				return auth.$unauth();
			}	
		}
		
		return Authentication;
}]);