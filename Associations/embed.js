var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// Post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);


// User - email,name
var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     name: "Parth",
//     email: "parth9740@gmail.com",

// });
// newUser.posts.push({
//     title: "How to pass in exams",
//     content: "You have to study hard, That's all."
// });

// newUser.save(function(err, user) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Appeles",
//     content: "They are delicious"
// });

// newPost.save(function(err, post) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

User.findOne({ name: "Parth" },
    function(err, user) {
        if (err) {
            console.log(err);
        }
        else {
            user.posts.push({
                title: "Three things I hate",
                content: "Voldemort, Voldemort and Voldemort"
            });
            user.save(function(err, user) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(user);
                }
            });
        }
    }
);
