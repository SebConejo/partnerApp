angular.module('app.controllers', [])

    .controller('summaryCtrl', ['$scope', '$state', '$stateParams', 'CustomerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $stateParams, CustomerService) {

            // set value to display
            $scope.amount = $stateParams.amount;

            $scope.makeTransaction = function () {
                CustomerService.update({
                    token: $stateParams.token,
                    transaction_amount: $stateParams.amount
                }).then(function (result) {
                    $state.go('successModal');
                }, function (error) {
                    $state.go('errorModal');
                });
            }
        }])

    .controller('homeCtrl', ['$scope', '$state', '$stateParams', 'CustomerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $stateParams, CustomerService) {

            $scope.scan = function () {
                // Scan Barcode
                // récupèrer le token

                // fake data waiting for Scanner Srevice
                var token = "202020";
                var amount = "2";
                $state.go('summary', {amount: amount, token: token});
            };

            // TODO : call Scan manually
            $scope.scan();

        }])

    .controller('successModalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('errorModalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
 