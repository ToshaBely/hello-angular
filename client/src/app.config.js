angular.module('HelloAngular')
    .config(function($routeProvider) {
        $routeProvider
            .when('/main', {
                templateUrl: 'src/main/main.html',
                controller: 'MainController',
                controllerAs: 'mainCtrl'
            })
            .when('/input', {
                templateUrl: 'src/input/input.html',
                controller: 'InputController',
                controllerAs: 'inputCtrl'
            })
            .otherwise('/');
    });

