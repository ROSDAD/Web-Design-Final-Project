const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: false,
    // },
    userId: {
      type: String,
      required: false,
    },
    firstName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    specialization: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    feePerCunsultation: {
      type: Number,
      required: false,
    },
    timings: {
      type: Array,
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const doctorModel = mongoose.model("doctors", doctorSchema);
module.exports = doctorModel;
