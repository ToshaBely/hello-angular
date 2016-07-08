(function () {
    "use strict";

    angular.module('HelloAngular')
        .controller('NavbarController', navbarController);

    function navbarController($scope, $location) {
        $scope.msg = 'hello';

        var vm = this;
        vm.active = '';
        vm.setActive = setActive;
        vm.isActive = isActive;
        
        function setActive(str) {
            vm.active = str;
            var flag = isActive(str);
        }

        function isActive(str) {
            return $location.$$path.startsWith('/' + str);
        }
        
        
    }
})();
