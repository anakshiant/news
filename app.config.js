angular.module('aim').config(['$locationProvider','$routeProvider',
		function config($locationProvider,$routeProvider){
			$locationProvider.hashPrefix('!');
			$routeProvider.when('/part',{
				templateUrl:'part.html'
			})
			.when('/channel/:category',{
				templateUrl:'a.html'
			}).
			when('/channel/top/:channelId',{
				templateUrl:'top.html'
			}).
			when('/channel/latest/:channelId',{
				templateUrl:'latest.html'
			}).
			when('/channel/popular/:channelId',{
				templateUrl:'popular.html'
			}).
			
			otherwise('/part');
		}
		]);