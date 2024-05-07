import express from 'express';
import "./Data/data";
import userRoutes from "./API/Routes/userRoutes";

const app = express();
const Port = process.env.PORT 
app.use(express.json());

app.use("/api", userRoutes);

app.listen(Port, () => {
    console.log(`app listening on port ${Port}`)
  })