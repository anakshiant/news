if('serviceWorker' in navigator){
			window.addEventListener('load',function(){
				navigator.serviceWorker.register('sworker.js').then(function(registration){
					console.log("service worker installed"+registration.scope);
				},
				function(err){
					console.error("service worker not installed"+err);
				}
			);
			});
		}