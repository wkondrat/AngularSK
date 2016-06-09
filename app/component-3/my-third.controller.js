angular.module('app.component3').controller('MyThirdController', function($scope, books, myService) {
    'use strict';
    $scope.isGenreTableVisible = false;
    $scope.data = {
        books: []
    };

    if (myService.getProperty() === undefined) {
        angular.copy(books.data, $scope.data.books);
        myService.setProperty($scope.data.books);
    } else {
        angular.copy(myService.getProperty(), $scope.data.books);
 }

 $scope.selectGenre = function(index) {
     var pickedGenre = $scope.data.books[index].genre;
     $scope.indexOfSelectedBook = index;
     $scope.booksByGenre = $scope.data.books.filter(function(obj) {
       return obj.genre === pickedGenre;
     });
     $scope.isGenreTableVisible = true;
 }
})
