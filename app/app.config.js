'use strict';

angular.
  module('artistlistApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/artists', {
          template: '<artist-list></artist-list>'
        }).
        when('/artists/:artistName', {
          template: '<artist-detail></artist-detail>'
        }).
        otherwise('/artists');
    }
  ]);
