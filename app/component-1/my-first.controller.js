angular.module('app.component1').controller('MyFirstController', function($scope, $http, $modal, books, myService) {
    'use strict';

    $scope.isEditButtonVisible = false;
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

    $scope.selectRow = function(book) {
        $scope.selectedRow = book;
        $scope.isEditButtonVisible = true;
    }

    $scope.selectGenre = function(index) {
        var pickedGenre = $scope.data.books[index].genre;
        $scope.indexOfSelectedBook = index;
        $scope.booksByGenre = $scope.data.books.filter(function(obj) {
          return obj.genre === pickedGenre;
        });
        $scope.isGenreTableVisible = true;
    }

    $scope.SendData = function() {
      var dataLength = $scope.data.books.length;
      var data = {
        title: $scope.data.books[dataLength-1].title,
        authors: $scope.data.books[dataLength-1].author
      };

        var config = {
            headers: {
                'Content-Type': 'application/json;'
            }
        }

        $http.post('http://localhost:8080/webstore/rest/books', data, config)
            .success(function(data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function(data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };

    $scope.showModalAdd = function() {
        var opts = {
            templateUrl: 'component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'MyModalController',
            resolve: {
                book: function() {
                    return $scope.selectedRow;
                }
            }
        };

        var modalInstance = $modal.open(opts);

        modalInstance.result.then(function(addBook) {
            $scope.data.books.push(addBook);
            myService.setProperty($scope.data.books);
            // $scope.SendData();
        }, function() {
            console.log("Modal Closed");
        });
    };

    $scope.showModalEdit = function() {
        $scope.opts = {
            templateUrl: 'component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'MyModalController',
            resolve: {
                book: function() {
                    return $scope.selectedRow;
                }
            }
        };

        var modalInstance = $modal.open($scope.opts);

        modalInstance.result.then(function(editBook) {
            $scope.selectedRow.title = editBook.title;
            $scope.selectedRow.author = editBook.author;
            $scope.selectedRow.genre = editBook.genre;
            $scope.selectedRow.year = editBook.year;
            myService.setProperty($scope.data.books);
        }, function() {
            //on cancel button press
            console.log("Modal Closed");
        });
    };

}).controller('MyModalController', function($scope, $modalInstance, book) {
    'use strict';
    $scope.book =  angular.copy(book);
    $scope.ok = function() {
        $modalInstance.close($scope.book);
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}).service('myService', function() {
    'use strict';
    var property = undefined;

    this.setProperty = function(value) {
        property = value;
    };

    this.getProperty = function() {
        return property;
    };
});
