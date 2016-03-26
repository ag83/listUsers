var app = angular.module('userslist', []);

app.controller('UsersCtrl', require('./usersController'));
app.factory('usersService', require('./usersService'));
