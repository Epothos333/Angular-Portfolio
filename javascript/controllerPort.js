app.controller('portController', [ '$scope', function($scope) {


			var buttons = document.getElementsByTagName('button');
			var divs = document.getElementsByClassName('ani')
			console.log(divs)


			$scope.switcharoo = function() {
				for (var i = 0; i <3; i++) {
					if (divs[i].id === 'left') {
						divs[i].id = 'middle';
					} 
					else if (divs[i].id === 'middle') {
						divs[i].id = 'right';
					}
					else {
						divs[i].id = 'left'
					}
				}
		};

}]);