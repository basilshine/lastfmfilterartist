'use strict';

angular.
  module('artistDetail').
  component('artistDetail', {
    templateUrl: 'artist-detail/artist-detail.template.html',
    controller: ['$routeParams', 'ArtistList',
      function ArtistDetailController($routeParams, Artist) {
        var self = this;

        Artist.query({
          artist: $routeParams.artistName,
          method: 'artist.getinfo'
        }).$promise.then(function (data) {
          self.artist = data.toJSON()['artist'];
        });

        Artist.query({
          artist: $routeParams.artistName,
          method: 'artist.gettopalbums'
        }).$promise.then(function (data) {
          self.discography = data.toJSON()['topalbums']['album'];
        });
      }
    ]
  });
