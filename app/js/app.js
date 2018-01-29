'use strict';
/* jshint browser:true */

angular.module('fisioDomusApp', ['fisioDomusApp.whyFisioDomus', 'fisioDomusApp.privacy', 'fisioDomusApp.accordion', 'fisioDomusApp.contacts'])
.controller('fisioDomusAppCtrl', function ($scope) {
    $scope.currentYear = (new Date()).getFullYear();
});

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
