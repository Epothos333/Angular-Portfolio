var app = angular.module('myModule', ['ngRoute']);

app.config([ '$routeProvider', 
	function($routeProvider) {
	$routeProvider.
	  when('/aboutView', {
		templateUrl: 'aboutView.html'
	});
	$routeProvider.
	  when('/portfolioView', {
		templateUrl: 'portfolioView.html'
	});
}]);