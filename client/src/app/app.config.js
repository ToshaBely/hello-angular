(function () {
    "use strict";

    angular.module('HelloAngular')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/main', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController',
                    controllerAs: 'mainCtrl'
                })
                .when('/input', {
                    templateUrl: 'app/input/input.html',
                    controller: 'InputController',
                    controllerAs: 'inputCtrl'
                })
                .otherwise('/');
        });
})();