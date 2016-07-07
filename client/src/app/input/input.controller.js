(function () {
    "use strict";

    angular.module('HelloAngular')
        .controller('InputController', inputController);
    function inputController($scope, ServiceValue) {
        var ctrl = this;
        ctrl.obj = ServiceValue;
        ctrl.changeClick = changeClick;
        $scope.obj = {name: "scopeAnton"};

        function changeClick() {
            ctrl.obj.name = $scope.yourName;
        }
    }
})();