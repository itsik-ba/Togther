import express from 'express';
const router = express.Router();


import { registerUser } from "../Controllers/register";
import { userLogin } from '../Controllers/login';



router.post("/register", registerUser)
router.post("/login", userLogin)


export default router;