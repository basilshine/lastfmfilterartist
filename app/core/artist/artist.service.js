'use strict';

angular.
  module('core.artist').
  factory('ArtistList', ['$resource',
    function($resource) {
      return $resource('http://ws.audioscrobbler.com/2.0/', {}, {
        query: {
          method: 'GET',
          params: {
            api_key: '1a77c4ae6afce04cf569a45a3e53d890',
            format: 'json',
          },
          isArray: false
        }
      });
    }
  ]);
