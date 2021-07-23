
			(function () {
				// Feature detect and conditionally load the polyfills.
				var webComponentsSupported = ('registerElement' in document
					&& 'import' in document.createElement('link')
					&& 'content' in document.createElement('template'));

				if (!webComponentsSupported) {
					var script = document.createElement('script');
					script.async = true;
					script.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
					document.head.appendChild(script);
				}
			})();
		