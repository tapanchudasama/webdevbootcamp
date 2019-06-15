var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Raj", "Sachin", "Akshat", "Tapan"];

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.post("/addfriend", function(req, res) {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER IS LISTENING!");
})
