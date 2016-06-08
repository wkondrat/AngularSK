angular.module('app.component1', ['ngRoute', 'app.component1.templates'])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider.when('/component-1/dialog-a', {
                templateUrl: 'component-1/dialog-a/dialog-a.html',
                controller: 'MyFirstController',
                resolve: {
                    books: function($http) {
                        return $http.get('/component-1/books.json');
                    }
                }
            }).when('/component-1/dialog-c', {
                templateUrl: 'component-1/dialog-c/dialog-c.html',
                controller: 'MyFirstController',
                resolve: {
                    books: function($http) {
                        return $http.get('/component-1/books.json');
                    }
                }
            });
            // .when('/component-1/modal-dialog', {
            //     templateUrl: 'component-1/modal-dialog/modal-dialog.html',
            //     controller: 'MyFirstController',
            //     resolve: {
            //         ok: function($http) {
            //             return $http.post("http://localhost:8080/webstore/rest/books", data).success(function(data, status) {
            //                 var data = {
            //                     "title": "Fourth book",
            //                     "authors": "Janusz Jankowski"
            //                 };
            //                 console.log("pass");
            //             });
            //         }
            //     }
            // });
    });
