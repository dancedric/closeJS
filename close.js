function closeJS(target) {
	var status = {};
	return {
		"init": function() {
			status.hasMouseMoved = false;
			status.hasUserScrolled = false;
			status.isMobile = false;
			status.elapsedTime = 0;
			closeJS.debug();
			closeJS.monitor();
		},
		"monitor": function() {
			//hasMouseMoved
			$(window).mousemove(function(event) {
				closeJS.report('hasMouseMoved', true); 
				closeJS.debug();	
				return true;
			});

			//hasUserScrolled
			$(window).scroll(function() {
				closeJS.report('hasUserScrolled', true);
				return $(window).scrollTop();
			});

			//isMobile
			if( navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ) {
				closeJS.report('isMobile', true);
			}

			//elapsedTime
			var seconds = 0;
			setInterval(function() {
				seconds++;
				closeJS.report('elapsedTime', seconds);
			},1000);
			
		},
		"report": function(k,v) {
			if( status.hasOwnProperty(k) && status[k] == v ) return false;
			status[k] = v;
		},
		"debug": function() {
			console.log(status);
		}
	}

	
	
}


var closeJS = closeJS(window);

closeJS.init();










