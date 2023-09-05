import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  address3: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  pincode: {
    type: String,
  },
});

const addressModel = mongoose.model("address", addressSchema);
export default addressModel;
