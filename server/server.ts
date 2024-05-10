import express from 'express';
import "./Data/data";
import userRoutes from "./API/Routes/userRoutes";
import cors from "cors";

const app = express();
const Port = process.env.PORT 
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`)
  })