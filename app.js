var redis = require('redis');

// create a new redis client and connect to our local redis instance
var client = redis.createClient();

// if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("Error " + err);
});

  client.setex("totalStars", 60, "value");
  client.get("totalStars", function(error, result) {
  		console.log("RSULT: "+result);
  })
