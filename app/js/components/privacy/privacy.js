(function () {
    'use strict';
    /* jshint browser:true */
    /* jshint validthis:true */

    // Declare app level module which depends on views, and components
    angular.module('fisioDomusApp.privacy', [])
        .directive("fdPrivacy", privacyDirective)
        .controller('privacyCtrl', privacyCtrlFn);

    function privacyDirective() {
        return {
            scope: {
                openPrivacy: '=open'
            },
            restrict: 'E',
            templateUrl: '/js/components/privacy/privacy.temp.html',
            controller: 'privacyCtrl',
            controllerAs: 'ctrl'
        };
    }

    function privacyCtrlFn($scope) {
        var self = this;
        self.policyInfos = [
            {
                category: 'statistic',
                icon: 'fa-bar-chart',
                title: 'Statistica',
                description: ["I servizi contenuti nella presente sezione permettono al Titolare del Trattamento di monitorare e analizzare i dati di traffico e servono a tener traccia del comportamento dell’Utente."],
                serivicesDetails: [{
                    name: "Google Analytics",
                    company: "Google Inc.",
                    description: ['Google Analytics è un servizio di analisi web fornito da Google Inc. (“Google”). Google utilizza i Dati Personali raccolti allo scopo di tracciare ed esaminare l’utilizzo di questa Applicazione, compilare report e condividerli con gli altri servizi sviluppati da Google."," Google potrebbe utilizzare i Dati Personali per contestualizzare e personalizzare gli annunci del proprio network pubblicitario.'],
                    dataTreated: ['Cookie e Dati di Utilizzo'],
                    where: 'USA',
                    policyLink: 'https://www.google.com/intl/it/policies/privacy/',
                    optionOut: 'https://tools.google.com/dlpage/gaoptout'
                }]
            }, {
                category: 'contents',
                icon: 'fa-file',
                title: 'Visualizzazione di contenuti da piattaforme esterne',
                description: ["Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi.", " Nel caso in cui sia installato un servizio di questo tipo, è possibile che, anche nel caso gli Utenti non utilizzino il servizio, lo stesso raccolga dati di traffico relativi alle pagine in cui è installato."],
                serivicesDetails: [{
                    name: "Widget Google Maps",
                    company: "Google Inc.",
                    description: ['Google Maps è un servizio di visualizzazione di mappe gestito da Google Inc. che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.'],
                    dataTreated: ['Cookie e Dati di Utilizzo'],
                    where: 'USA',
                    policyLink: 'https://www.google.com/intl/it/policies/privacy/',
                    optionOut: ''
                }]
            }, {
                category: 'contacts',
                icon: 'fa-address-card',
                title: 'Gestione contatti e invio di messaggi',
                description: ["Questo tipo di servizi consente di gestire un database di contatti email, contatti telefonici o contatti di qualunque altro tipo, utilizzati per comunicare con l’Utente.", "Questi servizi potrebbero inoltre consentire di raccogliere dati relativi alla data e all’ora di visualizzazione dei messaggi da parte dell’Utente, così come all’interazione dell'Utente con essi, come le informazioni sui click sui collegamenti inseriti nei messaggi."],
                serivicesDetails: [{
                    name: "MailChimp",
                    company: "The Rocket Science Group, LLC.",
                    description: ['MailChimp è un servizio di gestione indirizzi e invio di messaggi email fornito da The Rocket Science Group, LLC.'],
                    dataTreated: ['email'],
                    where: 'USA',
                    policyLink: 'https://mailchimp.com/legal/privacy/',
                    optionOut: ''
                }]
            }

        ];
        self.close = function () { $scope.openPrivacy = !$scope.openPrivacy; };

        $scope.$on('openPrivacyRequest', function (event, data) {
            $scope.openPrivacy = $scope.openPrivacy || true;
        });
    }
})();