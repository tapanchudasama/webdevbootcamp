var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// add cat to database
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong");
//     }
//     else {
//         console.log("We saved a cat to database");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});


//retrieve cat from database

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Error");
        console.log(err);
    }
    else {
        console.log("All the cats");
        console.log(cats);
    }
})
