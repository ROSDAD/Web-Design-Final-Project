const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // _id: {
    //   type: String,
    //   required: false,
    // },
    userId: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    },
    group: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    seenNotifications: {
      type: Array,
      default: [],
    },
    unseenNotifications: {
      type: Array,
      default: [],
    },    
    firstName: {
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
    timings : {
      type: Array,
      required: false,
    },
    status: {
      type: String,
      default: "pending",
      required: false

    }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
