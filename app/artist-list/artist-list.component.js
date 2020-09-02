'use strict';

function ArtistListController(ArtistList) {
  let self = this;
  this.submit = function() {
    ArtistList.query({
      artist: this.name,
      method: 'artist.search'
    }).$promise.then(function(data){
      self.artists = data.toJSON()['results'] ? data.toJSON()['results']['artistmatches']['artist'] : [];
    });

  }
}

// Register `artistList` component, along with its associated controller and template
angular.
  module('artistList').
  component('artistList', {
    templateUrl: 'artist-list/artist-list.template.html',
    controller: ['ArtistList', ArtistListController]
  });
