var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

app.config([ '$routeProvider', 
	function($routeProvider) {
	$routeProvider.
	  when('/', {
		templateUrl: 'aboutView.html'
	}).
	  when('/portfolioView', {
		templateUrl: 'portfolioView.html',
		controller: 'portController'
	})
}]);