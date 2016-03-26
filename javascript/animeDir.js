app.directive('animateDiv', function() {
	return {
		restrict: 'EA',
		template: '<div class="shadow"></div><ng-transclude></ng-transclude>',
		transclude: true
	}
});



		