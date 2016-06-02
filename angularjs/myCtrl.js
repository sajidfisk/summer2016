app.controller('myCtrl', function($scope) {
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
});
