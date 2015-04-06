ge.controller('accountDetails', ['$scope', '$firebaseObject', '$firebaseArray', function($scope, $firebaseObject, $firebaseArray) {
	var ref = new Firebase('https://shining-torch-5764.firebaseio.com/posts');
	
	$scope.posts = $firebaseObject(ref);
	
	$scope.articlesPost = function() {
		$scope.posts = $firebaseArray(ref);
		$scope.posts.$add({
			url: $scope.imagePost,
			name: $scope.namePost,
			author: $scope.authorPost,
			description: $scope.descriptionPost
		});
	}
	
	$scope.deleteUser = function(key) {
		$scope.accounts.$remove(key);
	}
}]);