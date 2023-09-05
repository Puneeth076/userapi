import express from "express";
import {
  registerCOntroller,
  updateAddress,
} from "../controllers/usercontroller";

const userRoute = express.Router();

userRoute.post("/register", registerCOntroller);
userRoute.post("/updateAddress", updateAddress);

export default userRoute;
