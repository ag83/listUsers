module.exports = function ($scope, usersService, $mdDialog) {

    var vm = this;
    vm.users = usersService.getUsers();
    vm.currentUser = null;
    vm.newUser = false;

    $scope.$on('usersUpdated', function() {
         vm.users = usersService.getUsers();
    });

    vm.userCond = function(bool) {    
        if(bool) {
            vm.newUser=true;
            vm.currentUser=null;
        } else {
            vm.newUser=false;
        }

        var template = require('template/create.jade')();
        $mdDialog.show({
            clickOutsideToClose: true,
            escapeToClose: true,
            scope: $scope,
            preserveScope: true,
            template: template,
            controller: function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function() {
                    $mdDialog.hide();
                };
                $scope.saveUser = function() {
                    if ($scope.createUser.$valid) {
                        console.log('$scope');
                        if (vm.newUser) {
                            usersService.setUser(vm.currentUser);
                        } else if (!vm.newUser) {
                            usersService.updateUser(vm.currentUser);
                        }
                        $mdDialog.hide();
                    }
                };
            }
        });
    };

    vm.showDetails = function(id) {
        var foundUser;
        for (var i=0; i<vm.users.length; i++) {
            if (vm.users[i].id === +id) {
                foundUser = vm.users[i];
            }
        }
        if (foundUser) {
            vm.currentUser = foundUser;
        }
    };

    vm.saveUser = function() {

        /*if ($scope.createUser.$valid) {
            usersService.setUser(vm.currentUser);
            $('#createUser').modal('hide');
        }   */
    };

    vm.updateUser = function() {
        if ($scope.createUser.$valid) {
            usersService.updateUser(vm.currentUser);
            $('#createUser').modal('hide');
        } 
    };

    vm.deleteUser = function(user) {
        usersService.deleteUser(vm.currentUser);
        vm.currentUser = null;
    };
    
};
