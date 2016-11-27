angular.module('app.controllers', [])

    .controller('page1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {

            $scope.makeTransaction = function () {
                // requete API PUT sur Customer
                // if success state.go successmodak
                // if error state.go errorModal
            }

        }])

    .controller('homeCtrl', ['$scope', '$stateParams', '$cordovaBarcodeScanner', '$ionicLoading',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterNam
        function ($scope, $stateParams, $cordovaBarcodeScanner) {

            $scope.formData = {token:"", amount:""};

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

                // faire une requête ajax pour récup le nom et prénom du client
                // then state go to Summary avec les données du customer
            };

        }])

    .controller('successModalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])

    .controller('errorModelCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        }])
 