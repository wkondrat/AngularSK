angular.module('app.component3').controller('MyThirdController', function($scope, books, myService) {
    'use strict';
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
        function filterByGenre(obj) {
            if (obj.genre === $scope.pickedGenre) {
                return true;
            }
        }
        $scope.selectedGenre = index;
        $scope.pickedGenre = $scope.data.books[index].genre;
        $scope.booksByGenre = $scope.data.books.filter(filterByGenre);
        $scope.genreTable = "genreTable";
    }
})
