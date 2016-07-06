(function () {
    angular.module('HelloAngular')
        .controller("MainController", mainController);

    function mainController($scope) {
        $scope.message = 'Hello, Anton!';
    }
})();
