var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", { thingVar: thing });
});

app.get("/posts", function(req, res) {
    var posts = [
        { title: "Post 1", author: "Parth" },
        { title: "Football", author: "Tapan" },
        { title: "Marvel Comics", author: "Kevin Feigi" }
    ]
    res.render("posts", { posts: posts });
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER IS RUNNING!!!");
});
