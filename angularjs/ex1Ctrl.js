app.controller('myCtrl', function($scope) {
    $scope.Math = window.Math;
    $scope.firstName= "Jane";
    $scope.lastName= "Doe";
    $scope.myColor = "lightyellow";
    $scope.established = 1866;
    $scope.year = 2016;
    $scope.person = {firstName:'Jazmyn', lastName:'Scott'};
    $scope.students = [
    	{firstName: "Denise", lastName:'Buliga', major: 'Business Administration/CS Minor'},
    	{firstName: "Erik", lastName:'Shaw', major: 'Business Administration/CS Minor'},
    	{firstName: "Maya", lastName:'Walters', major: 'Business Administration'},
    	{firstName: "Jada", lastName:'Prendergast', major: 'Computer Science'},
    	{firstName: "Jazmyn", lastName:'Scott', major: 'Psychology'},
    ];
    $scope.pv=1000;
    $scope.rate=4.25;
    $scope.n = 5;
    $scope.inventory = [
        {id: 1234, quantity: 15, price: 10},
        {id: 1768, quantity: 15, price: 20},
        {id: 2489, quantity: 15, price: 20.95},
        {id: 3243, quantity: 25, price: 30.42},
        {id: 3884, quantity: 50, price: 10.99},
        {id: 4777, quantity: 25, price: 43.95},
        {id: 4886, quantity: 52, price: 54.95},
        {id: 5873, quantity: 45, price: 12.99},
        {id: 8232, quantity: 35, price: 33.95},
    ];
    $scope.myAddress="sajid.fisk@gmail.com";
    $scope.fiskEmail = "shussain@fisk.edu"
});
