require('css/style.styl');

var app = angular.module('userslist', ['ngMaterial']);

app.controller('UsersCtrl', require('./usersController'));
app.factory('usersService', require('./usersService'));



