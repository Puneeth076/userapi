import express from "express";
import dorenv from "dotenv";
dorenv.config();
const app = express();
import route from "./routes/userRoutes";
import config from "./Dbconfig/config";
config();
app.use(express.json());

app.use("/api/v1/user", route);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));
