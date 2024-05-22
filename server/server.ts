import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import "./Data/data";
import userRoutes from "./API/Routes/userRoutes";
import cors from "cors";


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});
const Port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);


io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});

server.listen(Port, () => {
    console.log(`app listening on port ${Port}`)
  })