angular.module('app.component3', ['ngRoute','app.component3.templates'])
    .config(function ($routeProvider) {
        'use strict';
        $routeProvider.when('/component-3/dialog-d', {
            templateUrl: 'component-3/dialog-d/dialog-d.html',
            controller: 'MyThirdController',
            resolve: {
                books: function($http){
                    return $http.get('/component-1/books.json');
                }
            }
        });
    });
