
var app = angular.module('mp3',['ngRoute']);

app.config(['$routeProvider',function ($routeProvider){ 
	$routeProvider.
		when('/list',{
			templateUrl: 'partials/list.html',
			controller: 'demoTwoController'
		}).
		when('/details/:rank',{
			templateUrl: 'partials/details.html',
			controller: 'demoThreeController'
		}).
		when('/gallery',{
			templateUrl: 'partials/gallery.html',
			controller: 'demoController'
		}).
		otherwise({
			redirectTo: '/list'
		});
}]);

