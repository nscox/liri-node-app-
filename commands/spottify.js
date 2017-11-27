var Spotify = require('node-spotify-api');
var skey = require("../keys").spotifyKey;
var spotify = new Spotify(skey);

function doSpotify(title) {
    spotify.search({ type: 'track', query: title }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items); 
      });
    console.log ("spotify")
}

module.exports = doSpotify;