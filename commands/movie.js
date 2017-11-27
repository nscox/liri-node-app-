var request = require('request');
function movie(search) {
    request('http://www.omdbapi.com/?apikey=40e9cece&?t=' + search, function (error, response, body) {
      console.log(response)
    });
    
}
module.exports = movie;