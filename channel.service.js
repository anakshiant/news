angular.module('aim').factory('channelList',function($http){
	var channels={};
	$http.get("https://newsapi.org/v1/sources?language=en").then(
			function(response){
				channels.list=response.data.sources;
			}
		);
	return channels;
	
	
});