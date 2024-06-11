
import UserModel from "../Models/userModel";
const ADMIN_PASSWORD = process.env.ADDMINPASSWORD;



export const createRoom = async (req:any, res:any) => {
  try {
    const [roomName, adminPassword] = req.body
    
     if(!roomName) {
    return res.status(400).json({ message: 'Please provide a room name' });
  }

  if (!adminPassword || adminPassword !== ADMIN_PASSWORD) {
    return res.status(403).json({ message: 'Admin password is incorrect' });
  }

 const roomExist = await UserModel.findOne({'roomDetails.roomName': roomName });
  if(roomExist){
    return res.status(400).json({ message: "room name already exists" });
  }

  const user = await UserModel.findById(req.user.id); 
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  user.roomDetails = { roomName }; 
  await user.save();

  res.status(200).json({ message: 'Room created successfully' });
   } catch (error:any) {
    console.error(error.message)
    res.status(500).json({ message: 'Server error' });
   }
}