var getMyTweets = require("./commands/get-my-tweets")
var spottify = require("./commands/spottify")
var movie = require("./commands/movie")
var doIt = require("./commands/doIt")

var pick = function(caseData, functionData) {
    switch(caseData) {
        case "my-tweets":
            getMyTweets();
            break;
        case "spotify-this-song":
        spottify(functionData);
            break;
        case "movie-this":
        movie(functionData);
            break;
        case "do-what-it-says":
        doIt();
            break;
        // case "movie-this":
            // getMeMovie(functionData);
            // break;
    default: 
        console.log("I can\'t do that david.")
    }
}

var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);