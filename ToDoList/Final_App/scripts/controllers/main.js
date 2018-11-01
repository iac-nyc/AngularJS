'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
        var todo = {name: "This is a new Todo - click to edit"};
        $scope.todos.unshift(todo);
    };
    
    $scope.helloConsole = dataService.helloConsole;
    
    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
         
         });
    $scope.deleteTodo = function(todo, $index){
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };
    
    $scope.saveTodos = function(){
        var filterTodos = $scope.todos.filter(function(todo){
            if(todo.edited){
                return todo;
            };
        });
        dataService.saveTodos(filterTodos);
    };
    
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
  
})