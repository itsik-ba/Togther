import UserModel from "../Models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSecretKey:string = process.env.JWT_SECRET || 'default_secret_key';




export const userLogin = async (req:any, res:any) =>{
try {

  const { email, password } = req.body;

 const user = await UserModel.findOne({ email });

if(!user) {
  return res.status(401).json({ email: 'User not found !!!'});
}

const isPasswordValid = await bcrypt.compare(password, user.password)

if (!isPasswordValid) {
    return res.status(401).json({ password: "Invalid password !!!" });
  }

  const token = jwt.sign({ userId: user._id, email: user.email }, userSecretKey, { expiresIn: '1h' });

    res.status(200).json({ message: "Login successful", token });


} catch (error) {
  console.error(error);  
  res.status(500).json({ message: "Internal server error" });
}
}