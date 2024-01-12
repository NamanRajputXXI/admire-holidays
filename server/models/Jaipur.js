// const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   reviewerName: String,
//   reviewText: String,
//   reviewDate: Date,
// });

// const tourPlanSchema = new mongoose.Schema({
//   day1Heading: String,
//   day1Overview: String,
//   day2Heading: String,
//   day2Overview: String,
//   day3Heading: String,
//   day3Overview: String,

// });

// const jaipurSchema = new mongoose.Schema({
//   heading: String,
//   subHeading: String,
//   numberOfPhotos: Number,
//   duration: String,
//   maxPeople: Number,
//   minAge: String,
//   pickUp: String,
//   overview: String,
//   tourPlan: tourPlanSchema,
//   inclusions: {
//     1: String,
//     2: String,
//     3: String,
//     4: String,
//   },
//   exclusions: {
//     1: String,
//     2: String,
//     3: String,
//     4: String,
//   },
//   numberOfReviews: Number,
//   ratings: {
//     rating: Number,
//     "5Star": Number,
//     "4Star": Number,
//     "3Star": Number,
//     "2Star": Number,
//     "1star": Number,
//   },
//   reviews: {
//     review1: reviewSchema,
//     review2: reviewSchema,
//     review3: reviewSchema,
//     review4: reviewSchema,

//   },
//   price: Number,
//   previousPrice: Number,
//   extraService: {
//     adult: Number,
//     children: Number,
//     baby: Number,
//   },
//   depositOption: Number,
// });

// const JaipurModel = mongoose.model("Jaipur", jaipurSchema);

// module.exports = JaipurModel;

const mongoose = require("mongoose");

const tourPlanSchema = new mongoose.Schema({
  dayHeading: String,
  dayOverview: String,
});

const reviewSchema = new mongoose.Schema({
  reviewerName: String,
  reviewText: String,
  reviewDate: Date,
});

const extraServiceSchema = new mongoose.Schema({
  adult: Number,
  children: Number,
  baby: Number,
});

const RajasthanSchema = new mongoose.Schema({
  heading: String,
  subHeading: String,
  numberOfPhotos: Number,
  duration: String,
  maxPeople: Number,
  minAge: String,
  pickUp: String,
  overview: String,
  tourPlan: [tourPlanSchema],
  inclusions: {
    type: Map,
    of: String,
  },
  exclusions: {
    type: Map,
    of: String,
  },
  numberOfReviews: Number,
  ratings: {
    rating: Number,
    "5Star": Number,
    "4Star": Number,
    "3Star": Number,
    "2Star": Number,
    "1Star": Number,
  },
  reviews: {
    type: Map,
    of: reviewSchema,
  },
  price: Number,
  previousPrice: Number,
  extraService: extraServiceSchema,
  depositOption: Number,
});

const RajasthanModel = mongoose.model("Rajasthan", RajasthanSchema);

module.exports = RajasthanModel;
