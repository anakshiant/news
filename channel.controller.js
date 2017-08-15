app.controller('channel',
	function($scope,$http,$routeParams){
		$scope.category=$routeParams.category;
		$http.get("https://newsapi.org/v1/sources?language=en&category="+$scope.category).then(
			function(response){
				if(response.data.status==="ok"){
					$scope.channels=response.data.sources;
				}
				else{
					$scope.error="no internet connection";
				}
			}
			);
	}
	);