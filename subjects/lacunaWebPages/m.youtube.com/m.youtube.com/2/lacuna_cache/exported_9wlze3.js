
        (function() {
            var parsedGuideResponse;
            var guideEl;
            var guideResponse;
            if (window.loadGuideResponse) {
                guideEl = document.getElementById('initial-guide-data');
                guideResponse = guideEl && guideEl.firstChild && guideEl.firstChild.data;
                parsedGuideResponse = guideResponse ? JSON.parse(guideResponse) : null;
                loadGuideResponse(parsedGuideResponse);
            }
        })();
    