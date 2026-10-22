const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews post route
router.post("/:id/reviews",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Reviews delete route
router.delete("/:id/reviews/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview))

module.exports = router;