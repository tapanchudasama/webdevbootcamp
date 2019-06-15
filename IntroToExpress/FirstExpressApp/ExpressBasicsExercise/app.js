var express = require("express");
var app = express();

//Routes
app.get("/", function(req, res) {
    res.send("Hi There, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        cow: 'Moo',
        dog: 'Woof Woof',
        pig: 'Oink',
        cat: 'Meow',
        sachin: 'chuupBC'
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("The " + animal + " says '" + sound + "'");
});

app.get("/repeat/:word/:count", function(req, res) {
    var word = req.params.word;
    var count = Number(req.params.count);
    var result = " ";
    for (var i = 0; i < count; i++) {
        result = result + word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res) {
    res.send("Sorry, Page not found... What are you doing with your life?");
});

// Listen for Requests
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});
