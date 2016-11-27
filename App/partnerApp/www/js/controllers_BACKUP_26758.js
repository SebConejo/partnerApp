angular.module('app.controllers', [])

    .controller('summaryCtrl', ['$scope', '$state', '$stateParams', 'CustomerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $stateParams, CustomerService) {

            console.log($stateParams);

            // set value to display
            $scope.amount = $stateParams.amount;

            $scope.makeTransaction = function () {
                CustomerService.update({
                    token: $stateParams.token,
                    transaction_amount: $stateParams.amount * -1,
                }).then(function (result) {
                    $state.go('successModal');
                }, function (error) {
                    $state.go('errorModal');
                });
            }
        }])

<<<<<<< HEAD
    .controller('homeCtrl', ['$scope', '$stateParams', '$cordovaBarcodeScanner', '$ionicLoading',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterNam
        function ($scope, $stateParams, $cordovaBarcodeScanner) {

            $scope.formData = {token:"", amount:""};
=======
    .controller('homeCtrl', ['$scope', '$state', '$stateParams', 'CustomerService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $state, $stateParams, CustomerService) {
>>>>>>> 952a2df9efc8d3aa924faa8ed532b501dd98cb52

            $scope.scan = function () {
                if(true){
                $cordovaBarcodeScanner
                .scan()
                .then(function(barcodeData) {
                    $scope.formData.token = barcodeData.text;
                }, function(error) {

                // An error occurred
                });
                }
                else
                {
                    $scope.formData.token = "";
                }
                // Scan Barcode
<<<<<<< HEAD
=======
                // récupèrer le token
>>>>>>> 952a2df9efc8d3aa924faa8ed532b501dd98cb52

                // fake data waiting for Scanner Srevice
                var token = "202020";
                var amount = "33";
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
 