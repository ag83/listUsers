require('css/style.styl');

var app = angular.module('userslist', ['ngMaterial'])
        .config(function($mdThemingProvider){

            $mdThemingProvider.theme('default')
                .primaryPalette('grey')
                .accentPalette('orange');
        })

app.controller('UsersCtrl', require('./usersController'));
app.factory('usersService', require('./usersService'));



