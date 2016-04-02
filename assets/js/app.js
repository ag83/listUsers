require('bootstrap/dist/css/bootstrap.min.css');

require('bootstrap/dist/js/bootstrap.min.js');
require('angular');


var app = angular.module('userslist', []);

app.controller('UsersCtrl', require('./usersController'));
app.factory('usersService', require('./usersService'));



