const mongoose = require("mongoose");
const filter = require("../util/filter");

const PostSchema = new mongoose.Schema(
  {
    poster: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxLength: [80, "Must be no more than 80 characters"],
    },
    content: {
      type: String,
      required: true,
      maxLength: [8000, "Must be no more than 8000 characters"],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    edited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

PostSchema.pre("save", function (next) {
  this.title = filter.clean(this.title);
  this.content = filter.clean(this.content);
  next();
});

module.exports = mongoose.model("post", PostSchema);
