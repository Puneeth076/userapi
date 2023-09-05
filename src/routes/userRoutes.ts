import express from "express";
import { registerCOntroller } from "../controllers/usercontroller";

const route = express.Router();

route.post("/register", registerCOntroller);

export default route;
