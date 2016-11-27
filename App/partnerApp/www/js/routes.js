angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'templates/partnerHomePage.html',
                controller: 'homeCtrl'
            })

            .state('summary', {
                url: '/summary:amount:token',
                templateUrl: 'templates/summary.html',
                controller: 'summaryCtrl'
            })


            .state('successModal', {
                url: '/SuccessModal',
                templateUrl: 'templates/successModal.html',
                controller: 'successModalCtrl'
            })

            .state('errorModal', {
                url: '/ErrorModal',
                templateUrl: 'templates/errorModal.html',
                controller: 'errorModalCtrl'
            });

        $urlRouterProvider.otherwise('/recapPage')


    });