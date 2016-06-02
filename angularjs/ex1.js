var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.Math = window.Math;
    $scope.firstName= "Jane";
    $scope.lastName= "Doe";
    $scope.myColor = "lightblue";
    $scope.established = 1866;
    $scope.year = 2016;
    $scope.person = {firstName:'Jazmyn', lastName:'Scott'};
    $scope.students = [
    	{firstName: "Denise", lastName:'Buliga'},
    	{firstName: "Erik", lastName:'Shaw'},
    	{firstName: "Maya", lastName:'Walters'},
    	{firstName: "Jada", lastName:'Prendergast'},
    	{firstName: "Jazmyn", lastName:'Scott'},
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
});
