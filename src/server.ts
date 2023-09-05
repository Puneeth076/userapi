import express from "express";
import dorenv from "dotenv";
dorenv.config();
const app = express();
import config from "./Dbconfig/config";
import userRoute from "./routes/userRoutes";
config();
app.use(express.json());

app.use("/api/v1/user", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));
