'use strict';

var home = require('pages/home/home');
var qrcode = require('pages/qrcode/qrcode');
var snowball = require('pages/snowball/snowball');

/**
 * Route configuration for the RDash module.
 */
angular.module('Salute').config(function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('/', home)
        .state('qrcode', qrcode)
        .state('snowball', snowball);
});
