
import UserModel from "../Models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSecretKey:string                                                            = process.env.JWT_SECRET || 'default_secret_key';


export const registerUser = async (req:any, res:any) =>{
    try {
        const {username, email, password} = req.body;  
        
        if(!username || !email || !password){
            return res.status(400).json({ message: "Please provide all required fields" });
        }
       
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
       
        const newUser = await UserModel.create({
            username,
            email,
            password: hashedPassword 
        })
         
        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, userSecretKey, { expiresIn: '1h' });

        res.status(200).json({ message: "User created successfully", token });

} catch (error:any) {
       console.log(error); 
        if (error.code === 11000) {
            return res.status(400).json({ message: "Duplicate key error: User with this email already exists" });
        }
       res.status(500).json({ message: "Internal server error" });
    }
}