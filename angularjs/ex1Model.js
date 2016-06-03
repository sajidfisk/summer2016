app = angular.module('myApp', []);

app.directive("summer2016", function(){
    return{
        template:   "<a href='http://www.fisk.edu'>Fisk University</a> | " +
                    "<a href='http://github.com/sajidfisk/summer2016'>GitHub - Sajid</a> | " +
                    "<a href='http://w3schools.com'>w3schools</a>"
    };

});