var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo2", { useNewUrlParser: true });

// Post - title, content
var Post = require("./models/post");


// User - email,name
var User = require("./models/user");


Post.create({
    title: "How to cook the best burger (part3)",
    content: "Blah Blah Blah Hi Hi Hi"
}, function(err, post) {
    User.findOne({ email: "tapan9740@gmail.com" }, function(err, foundUser) {
        if (err) {
            console.log(err);
        }
        else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                }
            });
        }
    });
});

// User.create({
//     name: "Tapan",
//     email: "tapan9740@gmail.com",
// });

// User.findOne({ email: "tapan9740@gmail.com" }).populate("posts").exec(function(err, user) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });
