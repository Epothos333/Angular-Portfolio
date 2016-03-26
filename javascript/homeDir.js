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
