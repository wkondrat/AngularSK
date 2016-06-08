angular.module('app.component1').controller('MyFirstController', function($scope, $http, $modal, books, myService) {
    'use strict';
    // $scope.books = [];
    // angular.copy(books.data, $scope.books);

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
        $scope.editButton = "editButton";
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

    $scope.SendData = function () {
               // use $.param jQuery function to serialize data from JSON
                var data = $.param({
                    title: $scope.data.books[0].title,
                    authors: $scope.data.books[0].author
                });

                var config = {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                    }
                }

                $http.post('http://localhost:8080/webstore/rest/books', data, config)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                })
                .error(function (data, status, header, config) {
                    $scope.ResponseDetails = "Data: " + data +
                        "<hr />status: " + status +
                        "<hr />headers: " + header +
                        "<hr />config: " + config;
                });
            };

    $scope.showModalAdd = function() {
        $scope.opts = {
            templateUrl: 'component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'MyModalController',
            resolve: {
                books: function() {
                    return $scope.selectedRow;
                }
            }
        };

        var modalInstance = $modal.open($scope.opts);

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
                books: function() {
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

}).controller('MyModalController', function($scope, $modalInstance, books) {
    'use strict';

    $scope.books = angular.copy(books);
    $scope.selected = {
        books: $scope.books
    };

    $scope.ok = function() {
        $modalInstance.close($scope.books);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
}).service("myService", function() {
    'use strict';
    var property = undefined;

    this.setProperty = function(value) {
        property = value;
    };

    this.getProperty = function() {
        return property;
    };
});
