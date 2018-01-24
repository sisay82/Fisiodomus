(function () {
    'use strict';
    /* jshint browser:true */

    // Declare app level module which depends on views, and components
    angular.module('fisioDomusApp.accordion', [])
        .directive("fdAccordion", accordionDirective)
        .controller('accordionCtrl', accordionCtrlFn);

    function accordionDirective(){
        return {
            scope:{
                icon: '@',
                title: '@'
            },
            restrict: 'E',
            transclude: true,
            templateUrl: '/js/components/accordion/accordion.temp.html',
            controller:'accordionCtrl',
            controllerAs: 'ctrl'
        };    
    }

    function accordionCtrlFn($scope) {
    }
})();