var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

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
var app = angular.module('myModule');


var newAva = document.getElementById('avatar');
var hovers = document.getElementsByClassName('hoverMe');

for (var i = 0; i < hovers.length; i++) {
	hovers[i].addEventListener("mouseover", function() {
		newAva.src = 'images/monkey.png';
		})
	hovers[i].addEventListener("mouseout", function() {
		newAva.src = 'images/epothos.png';
		});
	};