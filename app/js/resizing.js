(function () {
    'use strict';

    var fullWidth = 1024;
    var fullHeight = 768;
    var adaptiveFullScreenThreshold = 768;

    switch (document.readyState) {
        case "interactive":
        case "complete":
            if (typeof fullScreen === "function") fullScreen(event);
            if (typeof heightsEqualizer === "function") heightsEqualizer(event);
            break;
        default:
            document.addEventListener("readystatechange", function (event) {
                if (typeof fullScreen === "function") fullScreen(event);
                if (typeof heightsEqualizer === "function") heightsEqualizer(event);
            });
    }


    window.addEventListener("resize", function (event) {
        if (typeof fullScreen === "function") fullScreen(event);
        if (typeof heightsEqualizer === "function") heightsEqualizer(event);
    });

    function heightsEqualizer(event) {
        var elements = document.querySelectorAll("[data-equalizeHeight=true]"),
            max_height = 0,
            len = 0,
            i;

        if (elements && elements.length > 0) {
            len = elements.length;

            for (i = 0; i < len; i++) { // get max height
                elements[i].style.height = ''; // reset height attr
                if (elements[i].clientHeight > max_height) {
                    max_height = elements[i].clientHeight;
                }
            }

            for (i = 0; i < len; i++) { // set max height to all elements
                elements[i].style.height = max_height + 'px';
            }
        }
    }

    function fullScreen(event) {
        fullWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        fullHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        // Determine whether width or height should be 100%
        var domElements = document.querySelectorAll("[data-fullscreen=true]");
        if (domElements && domElements.length > 0) {
            for (i = 0; i < domElements.length; i++) {
                var showNext = 0;
                if (fullHeight > adaptiveFullScreenThreshold) showNext = 120;
                domElements[i].style.height = fullHeight - showNext + "px";
            }
        }
    }
})();