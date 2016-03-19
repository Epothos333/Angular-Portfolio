app.directive('avatar', function() {
	return {
	restrict: 'EA',
	replace: false,
	controller: function($scope, $location) {
		$scope.changeView = function(view) {
		$location.path(view);
			}
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
			var img = document.getElementById('avatar');
			element.bind('mouseover', function() {
				img.src = 'images/monkey.png';
			})
			element.bind('mouseleave', function() {
				img.src = 'images/epothos.png';
			})
			}

		}
	});