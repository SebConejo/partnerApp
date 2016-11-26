'use strict';

angular.module('app').service('CustomerService', ['Restangular', '$http', function(Restangular, $http) {

    // Build collection /companies URL
    var _customerService = Restangular.all('customers');

    this.show = function(id, token) {
        // GET /customers/:id
        return _customerService.get(id, {token: token});
    };

    this.update = function (data) {
        // POST /api/customers/:customerId
        return  _customerService.post(data);
    };

}]);