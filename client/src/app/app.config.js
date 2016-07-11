(function () {
    "use strict";

    angular.module('HelloAngular')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/user', {
                    templateUrl: 'app/user/user.html',
                    controller: 'UserController',
                    controllerAs: 'userCtrl'
                })
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