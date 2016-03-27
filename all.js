var app = angular.module('myModule', ['ngRoute', 'ngAnimate']);

app.config([ '$routeProvider', 
	function($routeProvider) {
	$routeProvider.
	  when('/aboutView', {
		templateUrl: 'aboutView.html'
	}).
	  when('/portfolioView', {
		templateUrl: 'portfolioView.html',
		controller: 'portController'
	})
}]);
app.directive('animateDiv', function() {
	return {
		restrict: 'EA',
		template: '<div class="shadow"></div><ng-transclude></ng-transclude>',
		transclude: true
	}
});



		
// window.onload =  function() {

// var button = document.getElementById('animateBtn');
// var left = document.getElementById('green');
// var center = document.getElementById('red');
// var right = document.getElementById('blue');

// button.addEventListener('click', function() {
// 	left.style.animation = 'left 3s 1'
// 	right.style.animation = 'right 3s 1'
// 	center.style.animation = 'middle 3s 1'
// 	setTimeout(function() {
// 		left.style.height = '200px';
// 		left.style.width = '200px';
// 		left.style.left = '205px';
// 		right.style.right = '210px'
// 		center.style.height = '100px';
// 		center.style.width = '100px';
// 		center.style.left = '205px';
// 	}, 3000);

// 	//set animations to classes. Add and remove classes. Maybe keep positions perm.
// })

// }
app.controller('portController', [ '$scope', function($scope) {

	var divs = document.getElementsByClassName('ani');
	$scope.reversearoo = function() {
		for (i = 0; i <3; i++) {
			if (divs[i].id === 'left' || divs[i].id ==='lefty') {
				divs[i].id = 'righty';
			} 
			else if (divs[i].id === 'middle' || divs[i].id ==='middley') {
				divs[i].id = 'lefty';
			}
			else {
				divs[i].id = 'middley'
			}
		}

	}

	$scope.switcharoo = function() {
		for (i = 0; i <3; i++) {
			if (divs[i].id === 'left' || divs[i].id ==='lefty') {
				divs[i].id = 'middle';
			} 
			else if (divs[i].id === 'middle' || divs[i].id ==='middley') {
				divs[i].id = 'right';
			}
			else {
				divs[i].id = 'left'
			}
		}
};

}]);
app.directive('avatar', function() {
	return {
	restrict: 'EA',
	replace: false,
	controller: function($scope, $location) {
		$scope.changeView = function(view) {
		$location.path(view);
			}
		},
	link: function(scope, element, attrs) {
		toggleAva(element, element[0]);
		}
	}
});

app.directive('linker', function() {
	return {
		restrict: 'EA',
		replace: false,
		scope: {
			fill: '=',
			goTo: '='
		},
		template: "<a href='{{goTo}}'>{{fill}}</a>",
		link: function(scope, element, attrs) {
			toggleAva(element, document.getElementById('avatar'));
			}
		}
	});

function toggleAva(obj, src) {
	obj.bind('mouseover', function() {
		src.src = 'images/monkey.png';
	})
	obj.bind('mouseleave', function() {
		src.src = 'images/epothos.png'
	})
}
