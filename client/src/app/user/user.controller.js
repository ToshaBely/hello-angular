(function () {
    "use strict";

    angular.module('HelloAngular')
        .controller("UserController", userController);

    function userController($scope) {
        var vm = this;

        vm.isReadyForTest = false;
        vm.isTestStarted = false;
        vm.changeStatus = changeStatus;
        vm.requestTest = requestTest;
        vm.startTest = startTest;
        vm.completeTest = completeTest;
        
        function changeStatus() {
            vm.isReadyForTest = !vm.isReadyForTest; 
        }

        function requestTest() {
            vm.isReadyForTest = true;
            alert('Test was requested');
        }

        function startTest() {
            vm.isTestStarted = true;
            vm.isReadyForTest = false;
            alert('Test was started');
        }

        function completeTest() {
            vm.isTestStarted = false;
            alert('Test was completed');
        }
    }
})();
