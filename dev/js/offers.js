ge.controller('offersController', ['$scope', '$rootScope', '$firebaseAuth', '$location', 'Authentication', 'FIREBASE_URL', '$firebaseObject', '$firebaseArray', function($scope, $rootScope, $firebaseAuth, $location, Authentication, FIREBASE_URL, $firebaseObject, $firebaseArray){
	
	var ref = new Firebase(FIREBASE_URL);
	var dataObj = $firebaseArray(ref);
	var dataArray = $firebaseObject(ref);
	
	var authData = ref.getAuth();
	
	var newref = new Firebase(FIREBASE_URL + '/users' + authData.uid + '/offers' )
	
	dataObj.$loaded().then(function(data) {
		$scope.offers = dataObj;
	}).catch(function(error) {
		console.error("Error:", error);
	});
	
	dataArray.$loaded().then(function(data) {
		$rootScope.notifications = dataArray.length;
	}).catch(function(error) {
		console.error("Error:", error);
	});
	
	dataArray.$watch(function(event) {
		$rootScope.notifications = dataArray.length;
	});
	
}]);