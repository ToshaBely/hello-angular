(function () {
    "use strict";

    angular.module('HelloAngular')
        .controller('NavbarController', navbarController);

    function navbarController($scope, $location) {
        var vm = this;
        vm.isActive = isActive;

        function isActive(str) {
            return $location.$$path.startsWith('/' + str);
        }
    }
})();
