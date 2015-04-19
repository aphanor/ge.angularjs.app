ge.controller('offersController', ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Authentication', 'FIREBASE_URL', '$firebaseObject', '$firebaseArray', function($scope, $rootScope, $firebaseAuth, $location, Authentication, FIREBASE_URL, $firebaseObject, $firebaseArray){
	
	var ref = new Firebase(FIREBASE_URL + '/offers');
	var list = $firebaseArray(ref);
	var models = $firebaseObject(ref);
	
}]);