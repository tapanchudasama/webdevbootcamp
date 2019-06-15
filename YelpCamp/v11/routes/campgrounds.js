var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//INDEX - show all campgrounds
router.get("/campgrounds", function(req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("campgrounds/index", { campgrounds: allCampgrounds });
        }
    });
});

//CREATE - add new campground to DB
router.post("/campgrounds", middleware.isLoggedIn, function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    };
    var newCampground = { name: name, image: image, description: desc, author: author }
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            req.flash("error", "Error in creating Campground!");
            console.log(err);
        }
        else {
            //redirect back to campgrounds page
            req.flash("success", "New Campground added!");
            res.redirect("/campgrounds");
        }
    });
});

//NEW - show form to create new campground
router.get("/campgrounds/new", middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

// SHOW - shows more info about one campground
router.get("/campgrounds/:id", function(req, res) {
    //find the campground with provided ID
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground) {
        if (err || !foundCampground) {
            req.flash("error", "Campground not found");
            console.log(err);
            res.redirect("back");
        }
        else {
            console.log(foundCampground)
            //render show template with that campground
            res.render("campgrounds/show", { campground: foundCampground });
        }
    });
});


// EDIT 
router.get("/campgrounds/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            req.flash("error", "Campground does not exist!");
        }
        else {
            res.render("campgrounds/edit", { campground: foundCampground });
        }
    });
});

router.put("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground) {
        if (err) {
            res.redirect("/campgrounds");
        }
        else {
            req.flash("success", "Campground updated!");
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
});

// DESTROY 
router.delete("/campgrounds/:id", middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.redirect("/campgrounds");
        }
        else {
            req.flash("success", "Campground deleted!");
            res.redirect("/campgrounds");
        }
    })
})
module.exports = router;
