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
					el[0].children[1].children[1].style.display = '';
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



		