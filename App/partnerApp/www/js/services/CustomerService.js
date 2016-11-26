'use strict';

angular.module('app').service('CustomerService', ['Restangular', function(Restangular) {

    // Build collection /companies URL
    var _customerService = Restangular.all('customers');

    this.show = function(id) {
        // GET /customers/:id
        return _customerService.get(id);
    };

    this.update = function (customer) {
        // PUT /api/customers/:customerId
        return Restangular.copy(customer).save();
    };

}]);