angular.module('todoListApp')
       .directive('helloWorld', function(){
           return{
               template: "This is a hello world directive",
               restrict: "E"
           
           };
       
       });