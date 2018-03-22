var assignmentConfig = function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'EmployeesController',
            templateUrl: 'view/employees.html'
        })
        .when('/employee/:id', {
            controller: 'EmployeesController',
            templateUrl: 'view/aeEmployee.html'
        })
};

var Assignment = angular.module('Assignment', []).config(assignmentConfig);