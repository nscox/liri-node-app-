var twitterKeys = require("../keys").twitterKeys;
var Twitter = require("twitter");

var getMyTweets = function() {
    var client = new Twitter(twitterKeys);

    var params = {
        screen_name: "cnn"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
                console.log(tweets[i].created_at + "\n");
            }
        }
        console.log(error)
    })

}

module.exports = getMyTweets