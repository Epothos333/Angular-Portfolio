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