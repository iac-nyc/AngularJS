angular.module('todoListApp')
       .directive('helloWorld', function(){
           return{
               template: "This is a hello world custom directive, restricted to element.",
               restrict: "E"
           
           };
       
       });