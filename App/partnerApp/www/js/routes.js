angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('page1', {
    url: '/recapPage',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

  .state('partnerHomePage', {
    url: '/partnerHomePage',
    templateUrl: 'templates/partnerHomePage.html',
    controller: 'partnerpartnerHomePageCtrl'
  })

  .state('successModal', {
    url: '/SuccessModal',
    templateUrl: 'templates/successModal.html',
    controller: 'successModalCtrl'
  })

  .state('errorModel', {
    url: '/ErrorModal',
    templateUrl: 'templates/errorModel.html',
    controller: 'errorModelCtrl'
  })

$urlRouterProvider.otherwise('/recapPage')

  

});