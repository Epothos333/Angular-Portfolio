var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

app.config([ '$routeProvider', 
	function($routeProvider) {
	$routeProvider.
	  when('/', {
		templateUrl: 'Views/aboutView.html'
	}).
	  when('/portfolioView', {
		templateUrl: 'Views/portfolioView.html',
		controller: 'portController'
	})
}]);

// window.onload = function() {
// 	var slides = document.querySelectorAll('.scroll');
// 	slides[0].style.display = '';
// 	console.log(slides);


// };