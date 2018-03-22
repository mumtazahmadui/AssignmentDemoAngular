Assignment.service('EmployeeModel', function () {
    //debugger;
    this.getEmployees = function () {
        return [
            {
                id: 0,
                name: 'Mumtaz Ahmad',
                location: 'Badarpur, New Delhi',
                dateOfBirth: '07/02/1982',
                joiningDate: '11/11/2011'
            } 
        ];
    }
});