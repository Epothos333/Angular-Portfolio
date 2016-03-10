var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

app.config([ '$routeProvider', 
	function($routeProvider) {
	$routeProvider.
	  when('/aboutView', {
		templateUrl: 'aboutView.html',
		controller: 'aboutController'
	});
	$routeProvider.
	  when('/portfolioView', {
		templateUrl: 'portfolioView.html',
		controller: 'portfolioController'
	});
}]);