
		window.onload = function () {
			console.log((new Date).getTime() - window.startTime);
		}

		var loadTime = window.performance.timing.domContentLoadedEventEnd- window.performance.timing.navigationStart;
		console.log(loadTime)
		
		window.addEventListener('load',function () {
			console.log((new Date).getTime() - window.startTime);   
		},false);


		