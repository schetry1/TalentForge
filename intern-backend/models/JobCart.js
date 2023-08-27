const mongoose = require("mongoose");

const JobCartSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        jobs: [
          {
            jobid: {
              type: String,
            },
            opening: {
              type: Number,
              default: 1,
            },
          },
        ],
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("JobCart", JobCartSchema);