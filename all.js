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
app.directive('animateDiv', function() {
	return {
		restrict: 'EA',
		template: '<div class="shadow"></div><ng-transclude></ng-transclude>',
		transclude: true,
		link: function(scope, el, att) {
			el.bind('click', function() {
				if (el[0].id === 'left' || el[0].id === 'lefty') {
					scope.switcharoo();
				} else if (el[0].id === 'right' || el[0].id === 'righty') {
					scope.reversearoo();
				}
			});
			el.bind('mouseover', function() {
				if (el[0].id === 'middle' || el[0].id === 'middley') {
					el[0].children[1].children[1].style.display = 'block';
				}
			});
			el.bind('mouseout', function() {
				if (el[0].id === 'middle' || el[0].id === 'middley') {
					el[0].children[1].children[1].style.display = 'none';
				}
			});

		}
	}
});



		
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
