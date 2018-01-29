(function () {
    'use strict';
    /* jshint browser:true */
    /* jshint validthis:true */

    // Declare app level module which depends on views, and components
    angular.module('fisioDomusApp.contacts', [])
        .directive("fdContacts", contactsDirective)
        .controller('contactsCtrl', contactsCtrlFn);

    function contactsDirective(){
        return {
            scope:{
            },
            restrict: 'E',
             templateUrl: '/js/components/contacts/contacts.temp.html',
            controller:'contactsCtrl',
            controllerAs: 'ctrl'
        };    
    }

    function contactsCtrlFn($scope, $rootScope) {
        $scope.user = {};

        this.openPrivacy = function() {
            $rootScope.$broadcast('openPrivacyRequest');
        };
    }
})();