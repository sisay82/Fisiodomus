(function(){
'use strict';
/* jshint browser:true */

// Declare app level module which depends on views, and components
angular.module('fisioDomusApp.whyFisioDomus', [])
    .controller('whyFisioDomusCtrl', function ($scope) {
        $scope.whyFisioDomus = [
            {
                id: 'answer1',
                title: 'Rapporto diretto tra assistito e fisioterapista',
                subTitle: '',
                detailList: [
                    "Fisiodomus elimina i costi e i rapporti di intermediazione: le tariffe sono più sostenibili per tutti grazie al rapporto diretto tra persona assistita e fisioterapista. In questo modo è maggiormente valorizzato ciascun intervento fisioterapico.",
                    "Ogni fisioterapista Fisiodomus è il responsabile del Progetto Riabilitativo specifico per la persona assistita in modo da offrire un servizio personalizzato sulle esigenze e sulle aspettative della persona assistita e della propria famiglia.",
                    "In base al luogo di intervento, alla problematica e alle richieste specifiche verrai contattato direttamente dal fisioterapista."
                ],
                footer: ''
            },
            {
                id: 'answer2',
                title: 'Una rete di professionisti a tua disposizione',
                subTitle: '',
                detailList: [
                    "Fisiodomus non è solo una associazione di professionisti della riabilitazione, ma un vero e proprio team di fisioterapisti referenziati selezionati!",
                    "In caso di bisogno le consegne passano da un fisioterapista Fisiodomus ad un altro associato con la stessa qualità e standard professionale in modo da garantire la continuità delle terapie riabilitative tutto l'anno.",
                    "Per garantire un servizio completo ciascun fisioterapista prende contatto, si confronta e mantiene i rapporti con i medici specialisti o di base e con gli altri professionisti sanitari che sia adoperano per la salute della persona.",
                    "L'associazione Fisiodomus organizza anche serate informative e divulgative gratuite, aperte a tutti i cittadini, riguardanti la prevenzione e la salute in ambito fisioterapico (Lombalgia, Ictus, ...)"
                ], footer: ''
            },
            {
                id: 'answer3',
                title: 'Riduzione costi ricovero in strutture private',
                subTitle: '',
                detailList: [
                    "La riabilitazione domiciliare Fisiodomus contribuisce a ridurre la durata e i costi di degenza / ospedalizzazione per le famiglie garantendo un servizio fisioterapico di qualità anche a casa.",
                    "Fisiodomus migliora l'assistenza domiciliare successiva all'ospedalizzazione per coloro che necessitano di un percorso riabilitativo in seguito alla dimissione ospedaliera, offrendo un servizio fisioterapico alla portata del maggior numero possibile di persone.",
                    "Il servizio a domicilio è indubbiamente più comodo ed economico rispetto a quello in un centro riabilitativo. Nessuno spostamento da casa siamo noi a raggiungervi!"
                ],
                footer: ''
            },
            {
                id: 'answer4',
                title: 'Recupero autonomie nel proprio ambiente',
                subTitle: '',
                detailList: [
                    "Tramite Fisiodomus e i servizi di fisioterapia a domicilio la famiglia (o il care giver) sarà facilitata e addestrata nella cura della persona assistita.",
                    "Il recupero delle proprie autonomie è più funzionale se eseguito a domicilio, la persona è più coinvolta nel percorso di cura e nel proprio ambiente domestico è possibile affrontare e superare le problematiche della vita quotidiana (ausili, strategie, spazi, ...)."
                ],
                footer: ''
            },
            {
                id: 'answer5',
                title: 'Lotta all\'abusivismo professionale',
                subTitle: '',
                detailList: [
                    "Per il pieno rispetto della persona assistita tutti i fisioterapisti Fisiodomus sono Dottori, laureati in fisioterapia, liberi professionisti, iscritti all'AIFi (Associazione Italiana Fisioterapisti).",
                    "Fisiodomus partecipa alla campagna \"Già le mani\" e \"Io sono un fisioterapista vero\" proprio per difendersi dai falsi fisioterapisti abusivi.",
                    "Ciascun fisioterapista Fisiodomus partecipa a corsi di aggiornamento professionale per garantire prestazioni di alta qualità ed è provvisto di polizza di Responsabilità Civile professionale verso terzi."
                ],
                footer: ''
            },
            {
                id: 'answer6',
                title: 'Fisiodomus, il "fisioterapista di famiglia"!',
                subTitle: '',
                detailList: [
                    "Il proposito di Fisiodomus è di garantire al maggior numero possibile di persone un servizio fisioterapico di qualità a domicilio, diventando il punto di riferimento riabilitativo sul territorio per le famiglie che hanno necessità.",
                    "Le prestazioni di fisioterapia domiciliare garantite dal Servizio Sanitario Regionale sono limitate ad alcuni interventi, Fisiodomus si affianca e potenzia questo servizio grazie anche all'efficacia e all'efficenza garantite da anni di servizi e di relazioni con le persone nel nostro territorio.",
                    "Fisiodomus, per migliorare la qualità della vita, la prevenzione e le problematiche riguardanti il sistema di movimento, è l'interfaccia tra il medico curante e la persona assistita. Contattaci come se stessi contattando il tuo medico di fiducia per un dubbio di salute!"
                ],
                footer: ''
            }];

        $scope.detail = { id: '', title: '', subTitle: '', detailList: [], footer: '' };
        $scope.showWhyFisioDomusDetail = false;
        $scope.showError = false;
        $scope.errorText = "";

        $scope.showDetail = function (answerIndex) {

            if (typeof answerIndex === "undefined") {
                $scope.errorText = "Non è stato possibile caricare il dettaglio delL'argomento scelto";
                console.error("The index passed as parameter is undefined. answerIndex is required to get the detail.");
                return;
            }
            if (!$scope.detail) {
                $scope.errorText = "Non è stato possibile caricare il dettaglio delL'argomento scelto";
                console.error("$scope.detail is not initialize.");
                return;
            }

            if ($scope.whyFisioDomus && !$scope.whyFisioDomus[answerIndex]) {
                $scope.errorText = "Non è stato possibile caricare il dettaglio dell'argomento scelto";
            }
            else {
                $scope.detail.id = $scope.whyFisioDomus[answerIndex].id;
                $scope.detail.title = $scope.whyFisioDomus[answerIndex].title;
                $scope.detail.subTitle = $scope.whyFisioDomus[answerIndex].subTitle;
                $scope.detail.footer = $scope.whyFisioDomus[answerIndex].footer;
                $scope.showWhyFisioDomusDetail = !$scope.showWhyFisioDomusDetail;

                $scope.detail.detailList = [];
                $scope.whyFisioDomus[answerIndex].detailList.forEach(function (el) { $scope.detail.detailList.push(el); });

                if ($scope.detail.detailList.length === 0) {
                    $scope.detail.detailList.push("Siamo spiacenti ma non abbiamo ancora inserito maggiori informazioni per questo argomento. Provvederemo quanto prima.");
                }
            }
        };

        $scope.hideError = function () {
            $scope.showError = !$scope.showError;
        };

        $scope.hideDetail = function () {
            $scope.showWhyFisioDomusDetail = !$scope.showWhyFisioDomusDetail;
        };
    });
})();