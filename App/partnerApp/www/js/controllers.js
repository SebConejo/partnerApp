angular.module('app.controllers', [])

    .controller('summaryCtrl', ['$scope', '$state', '$stateParams', 'CustomerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $stateParams, CustomerService) {

            // set values to display
            $scope.amount = $stateParams.amount;
            $scope.customer = {
                firstName: $stateParams.firstName,
                lastName: $stateParams.lastName
            };

            $scope.makeTransaction = function () {
                CustomerService.update({id: $stateParams.id,
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

            // fake data waiting for Scanner Srevice
            var customerId = 1;
            var token = "202020";
            var amount = "2";

            CustomerService.show(customerId, token).then(function (results) {
                $state.go('summary', {
                    firstName: results.first_name,
                    lastName: results.last_name,
                    amount: amount,
                    token: token,
                    id: results.id
                });
            });

            $scope.scan = function () {
                // Scan Barcode
                // récupèrer le token


            };

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
 