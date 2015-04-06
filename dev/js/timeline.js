ge.controller('accountDetails', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
	var ref = new Firebase('https://shining-torch-5764.firebaseio.com/accounts');
	var reff = new Firebase('https://shining-torch-5764.firebaseio.com/posts');
	
	$scope.posts = $firebaseObject(reff);
	
	$scope.articlesPost = function() {
		$scope.posts = $firebaseArray(reff);
		$scope.posts.$add({
			url: $scope.imagePost,
			name: $scope.namePost,
			author: $scope.authorPost,
			description: $scope.descriptionPost
		});
	}
	
	$scope.accounts = $firebaseObject(ref);
	
	$scope.addAccounts = function() {
		$scope.accounts = $firebaseArray(ref);
		$scope.accounts.$add({
			username: $scope.username
		});
	}
	
	$scope.deleteUser = function(key) {
		$scope.accounts.$remove(key);
	}
}]);