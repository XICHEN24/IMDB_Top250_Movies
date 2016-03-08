/* Sample Controller */

app.controller('demoController',['$scope','$http', function($scope, $http){
		$scope.setgene = "";
		$scope.order = "rank";
		$http.get('data/imdb250.json').success(function(data){
			$scope.alldata = data;
			console.log(data);

		}).error(function(err){
			console.log(err);
		});
}]);

app.controller('demoTwoController',['$scope','$http', function($scope, $http){
	$scope.myName = "xi";
	$scope.search = "Search for Movies";
	$scope.order = "rank";
	//$scope.movies = [];
	$http.get('data/imdb250.json').success(function(data){
		$scope.alldata = data;
		console.log($scope.alldata);

	}).error(function(err){
		console.log(err);
	});
	$scope.list = true;
	$scope.change = function(num){
		if($scope.list ===true && num ===0){
			$scope.list = true;
		}
		else if ($scope.list ===true && num === 1){
			$scope.order = '-'+$scope.order;
			$scope.list = false;
		}
		else if ($scope.list ===false && num ===0){
			$scope.order = '-'+$scope.order;
			$scope.list = true;
		}
		else{
			$scope.list = false;
		}
	}
	$scope.setorder = function(ordername){
		if($scope.order === ordername){
			$scope.order = '-'+ordername;
		}

		else if($scope.order ==='-'+ ordername){
			$scope.order = ordername;
		}
		else{
			$scope.order = ordername;
		}
	}
}]);
app.controller('demoThreeController',['$scope','$http','$routeParams', function($scope, $http, $routeParams){
		$scope.myRank = $routeParams.rank;
		$http.get('data/imdb250.json').success(function(data){
			$scope.alldata = data;
			console.log($scope.alldata[$scope.myRank]);
			$scope.movie = $scope.alldata[$scope.myRank-1];

		}).error(function(err){
			console.log(err);
		});
}]);
