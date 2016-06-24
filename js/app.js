var isOpen = false;

function w3_open() {
    if (isOpen) {
        w3_close();
    }
    else {
        isOpen = true;
        document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
        document.getElementById("GoTopBtn").style.zIndex = "0";
    }
}
function w3_close() {
    isOpen = false;
    document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    document.getElementById("GoTopBtn").style.zIndex = "1";
}

window.onresize = function resize(event) {
    if (typeof fullScreen === "function") fullScreen(event);
    if (typeof heightsEqualizer === "function") heightsEqualizer(event);
    if (affixSpies && typeof affixSpies.affix === "function") affixSpies.affix();
};

window.onload = function load(event) {
    if (typeof fullScreen === "function") fullScreen(event);
    if (typeof heightsEqualizer === "function") heightsEqualizer(event);
    if (typeof affixInit === "function") affixInit(event);
};

window.onscroll = function scroll(event) {
    if (affixSpies && typeof affixSpies.affix === "function") affixSpies.affix();
};