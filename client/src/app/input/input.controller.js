(function () {
    "use strict";

    angular.module('HelloAngular')
        .controller('InputController', inputController);
    function inputController($scope, ServiceValue) {
        var ctrl = this;
        ctrl.string = "Hello";
        ctrl.changeClick = changeClick;

        function changeClick() {
            ctrl.string = $scope.yourName;
        }
    }
})();