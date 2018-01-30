(function () {
    'use strict';
    /* jshint browser:true */
    /* jshint validthis:true */

    // Declare app level module which depends on views, and components
    angular.module('fisioDomusApp.contacts', [])
        .directive("fdContacts", contactsDirective)
        .controller('contactsCtrl', contactsCtrlFn);

    function contactsDirective() {
        return {
            scope: {
            },
            restrict: 'E',
            templateUrl: '/js/components/contacts/contacts.temp.html',
            controller: 'contactsCtrl',
            controllerAs: 'ctrl'
        };
    }

    function contactsCtrlFn($scope, $rootScope, $http) {
        var contactServURL = "/php-services/contact-form.php";
        $scope.user = {};

        this.submitContactReq = function (isValid) {
            if (isValid) {
                var dataToSend = {
                    "name": $scope.user.firstname + " " + $scope.user.surname,
                    "phoneNumber": $scope.user.phoneNumber,
                    "email": $scope.user.email,
                    "message": $scope.user.message,
                    "privacyAgree": $scope.user.privacyAgree
                };

                $http.post(contactServURL, dataToSend).then(function (resolve) {
                        $scope.status = resolve.status;
                        $scope.data = resolve.data;
                        $scope.result = resolve.data; // Show result from server in our <pre></pre> element and clean the form
                    });
            } else {
                alert('Form is not valid');
            }

        };

        this.openPrivacy = function () {
            $rootScope.$broadcast('openPrivacyRequest');
        };
    }
})();