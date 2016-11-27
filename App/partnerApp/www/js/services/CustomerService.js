'use strict';

angular.module('app').service('CustomerService', ['Restangular', '$http', function(Restangular, $http) {

    // Build collection /companies URL
    var _customerService = Restangular.all('customers');

    this.update = function (data) {
        // POST /api/customers/:customerId
        return  _customerService.post(data);
    };

}]);