(function () {
    'use strict';

    var affixSpies = [];

    switch (document.readyState) {
        case "interactive":
        case "complete":
            if (typeof affixInit === "function") affixInit(event);
            break;
        default:
            document.addEventListener("readystatechange", function (event) {
                if (typeof affixInit === "function") affixInit(event);
            });
    }


    window.addEventListener("resize", function () {
        if (affixSpies && typeof affixSpies.affix === "function") affixSpies.affix();
    });
    window.addEventListener("scroll", function () {
        if (affixSpies && typeof affixSpies.affix === "function") affixSpies.affix();
    });

    affixSpies.affix = function () {
        this.forEach(function (el) {
            if (el && el.rawSpyElement && el.headerLogoElement && el.homeLogoElement) {
                if (!el.offset && isNaN(el.offset)) el.offset = 15;

                var offset = el.rawSpyElement.offsetHeight + el.offset;
                var currentPosition = el.homeLogoElement.getBoundingClientRect().bottom;

                switch (el.placement) {
                    case "top":
                        currentPosition = el.homeLogoElement.getBoundingClientRect().top;
                        break;
                    case "bottom":
                        currentPosition = el.homeLogoElement.getBoundingClientRect().bottom;
                        break;
                    case "left":
                        currentPosition = el.homeLogoElement.getBoundingClientRect().left;
                        break;
                    case "right":
                        currentPosition = el.homeLogoElement.getBoundingClientRect().right;
                        break;
                    default:
                        currentPosition = el.homeLogoElement.getBoundingClientRect().bottom;
                }


                if (currentPosition > offset) {
                    if (el.homeLogoElement.style.animation) { //check if is the first scroll in a still visible position
                        el.homeLogoElement.style.WebkitAnimation = "opac 0.5s ease-in";
                        el.homeLogoElement.style.animation = "opac 0.5s ease-in";
                    }
                    el.homeLogoElement.style.opacity = "1";
                    el.headerLogoElement.style.WebkitAnimation = "opacReverse 0.5s ease-out";
                    el.headerLogoElement.style.animation = "opacReverse 0.5s ease-out";
                    el.headerLogoElement.style.opacity = "0";
                }
                else {
                    el.homeLogoElement.style.WebkitAnimation = "opacReverse 0.5s ease-out";
                    el.homeLogoElement.style.animation = "opacReverse 0.5s ease-out";
                    el.homeLogoElement.style.opacity = "0";

                    if (el.headerLogoElement.style.animation) { //check if is the first scroll in a still visible position
                        el.headerLogoElement.style.WebkitAnimation = "opac 0.5s ease-in";
                        el.headerLogoElement.style.animation = "opac 0.5s ease-in";
                    }
                    el.headerLogoElement.style.opacity = "1";
                    el.headerLogoElement.style.display = "inline-block";
                }

            }
        });
    };

    function affixInit(event) {
        var allElements = document.getElementsByTagName("*");

        if (allElements) {
            for (var i = 0; i < allElements.length; i++) {
                var el = allElements[i];
                if (el && el.hasAttributes("data-spy") && el.hasAttribute("data-headerlogo") && el.hasAttribute("data-homeLogo") &&
                    el.attributes["data-spy"].value && el.attributes["data-spy"].value === "affix" &&
                    el.attributes["data-headerlogo"].value && el.attributes["data-homeLogo"].value
                ) {
                    var affixLogo = { placement: "bottom", offset: 15 };

                    affixLogo.rawSpyElement = el;
                    affixLogo.headerLogoElement = allElements[el.attributes["data-headerlogo"].value];
                    affixLogo.homeLogoElement = allElements[el.attributes["data-homelogo"].value];

                    if (el.hasAttributes("data-placement") && el.attributes["data-placement"].value)
                        affixLogo.placement = el.attributes["data-placement"].value;

                    if (el.hasAttributes("data-offset") && el.attributes["data-offset"].value)
                        affixLogo.offset = parseInt(el.attributes["data-offset"].value);

                    affixSpies.push(affixLogo);
                }
            }
        }
    }

})();