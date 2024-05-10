import express from 'express';
const router = express.Router();


import { registerUser } from "../Controllers/register";



router.post("/register", registerUser)


export default router;