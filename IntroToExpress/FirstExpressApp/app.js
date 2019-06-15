var express = require("express");
var app = express();

// "/" => "Hi There!"
app.get("/", function(req, res) {
    res.send("Hi There!");
});

// "bye" => "Goodbye"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});
// "dogs" => "Woof"
app.get("/dogs", function(req, res) {
    res.send("Meow!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    console.log(req.params);
    res.send("Welcome to " + subreddit.toUpperCase() + " subreddit!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res) {
    console.log(req.params);
    res.send("Welcome to comments page!");
});
app.get("*", function(req, res) {
    res.send("You are a star!")
});
// Tell express to listen for requests

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});
