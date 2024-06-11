import express from 'express';
const router = express.Router();


import { registerUser } from "../Controllers/register";
import { userLogin } from '../Controllers/login';
import { createRoom } from '../Controllers/createRoom';



router.post("/register", registerUser)
router.post("/login", userLogin)
router.post("/createRoom", createRoom)

export default router;