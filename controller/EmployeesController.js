Assignment.controller('EmployeesController',
    function ($scope, $location, $routeParams, EmployeeModel) {
        //  debugger;
        var employees = EmployeeModel.getEmployees();

        $scope.loader = false;
        $scope.saved = localStorage.getItem('emp');
        $scope.emp = (localStorage.getItem('emp') !== null) ? JSON.parse($scope.saved) : employees;
        localStorage.setItem('emp', JSON.stringify($scope.emp));

        $scope.saveEmployee = function () {
            $scope.loader = true;
           // debugger;
            var empNo;
            if ($scope.id === null || $scope.id === undefined || $scope.id === '') {
                if ($scope.emp.length > 1) {
                    empNo = $scope.emp[$scope.emp.length - 1].id + 1;
                }
                else
                    empNo = $scope.emp.length;
            }
            else {
                empNo = $scope.id;
            }

            var empModel = {};
            empModel["id"] = empNo;
            empModel["name"] = $scope.name;
            empModel["location"] = $scope.location;
            empModel["dateOfBirth"] = $scope.dateOfBirth;
            empModel["joiningDate"] = $scope.joiningDate;

            //Check for update or Add
            var storage = JSON.parse(localStorage.getItem('emp'));

            var isUpdate = false;
            for (var i = 0; i < storage.length; i++) {
                try {
                    if (storage[i].id === $scope.id) {
                        isUpdate = true;
                      
                        $scope.emp[i].name = empModel["name"];
                        $scope.emp[i].location = empModel["location"];
                        $scope.emp[i].dateOfBirth = empModel["dateOfBirth"];
                        $scope.emp[i].joiningDate = empModel["joiningDate"];
                        break;
                    }
                } catch (e) {
                    console.log('exception ' + e);
                }
            }
            // debugger;
            if (!isUpdate) {
                $scope.emp.push(empModel);
            }

            localStorage.setItem('emp', JSON.stringify($scope.emp));

            $scope.loader = false;
            $scope.firstTime = false;
            $scope.name = ''; $scope.location = ''; $scope.dateOfBirth = ''; $scope.joiningDate = '';
        };

        $scope.delEmp = function (id) {
            var confirmDelete = confirm('are you sure you want to delete this employee?');
            if (confirmDelete) {
                var storage = JSON.parse(localStorage.getItem('emp'));
               // debugger;
                for (var i = 0; i < storage.length; i++) {
                    try {
                        if (storage[i].id === id) {
                            // debugger;
                            storage.splice(i, 1);
                            localStorage.setItem('emp', JSON.stringify(storage));
                            window.location.href = 'start.html';
                        }
                    } catch (e) {
                        console.log('exception ' + e);
                    }
                }
            }
        };

        $scope.editEmp = function (id) {
            var storage = JSON.parse(localStorage.getItem('emp'));
          //  debugger;
            var editEmp;
            for (var i = 0; i < storage.length; i++) {
                try {
                    if (storage[i].id === id) {
                        editEmp = storage[i];
                    }
                } catch (e) {
                    console.log('exception ' + e);
                }
            }

            $scope.id = editEmp.id;
            $scope.name = editEmp.name;
            $scope.location = editEmp.location;
            $scope.dateOfBirth = editEmp.dateOfBirth;
            $scope.joiningDate = editEmp.joiningDate;
            $scope.firstTime = true;
        };

        $scope.showForm = function () {
            $scope.firstTime = true;
            $scope.id = ''; $scope.name = ''; $scope.location = ''; $scope.dateOfBirth = ''; $scope.joiningDate = '';
        };

        $scope.cancel = function () {
            $scope.firstTime = false;
            $scope.id = ''; $scope.name = ''; $scope.location = ''; $scope.dateOfBirth = ''; $scope.joiningDate = '';
        };
    }
    );