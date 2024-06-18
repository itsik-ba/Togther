
import UserModel from "../Models/userModel";
import jwt from "jsonwebtoken";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const userSecretKey = process.env.JWT_SECRET || 'default_secret_key';

interface JwtPayload {
  userId: string;
  email: string;
}


export const createRoom = async (req:any, res:any) =>{
try {
 
  const {roomName, adminPassword} = req.body;
 
  if(!roomName){
    return res.status(401).json({message:'Invalid room name'})
  }
  
  if(!adminPassword){
    return res.status(401).json({message:'Invalid admin password'})
  }

  if (adminPassword !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized access' });
}
 
   const token = req.header('Authorization')?.replace('Bearer ', '');

   if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const decoded = jwt.verify(token, userSecretKey) as JwtPayload;

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }


  const user = await UserModel.findById(decoded.userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.roomDetails && user.roomDetails.roomName === roomName) {
    return res.status(400).json({ message: 'Room name already taken' });
  }

  user.roomDetails = { roomName };
  await user.save();


return res.status(200).json({ message: 'Room created successfully' });

  } catch (error) {
  console.error(error);
  return res.status(500).json({ message: 'Server error' });
  };

};