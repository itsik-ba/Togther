import UserModel from "../Models/userModel";


export const enterRoom = async (req:any, res:any) => {
    try {
     const {roomName, roomPassword} = req.body  
    
     if(!roomName){
        return res.status(401).json({message:'wrong room name'})
      }

     if(!roomPassword){
        return res.status(401).json({message:'room password is incorrect'})
      }
 
      const user = await UserModel.findOne({
        'roomDetails.roomName': roomName,
        'roomDetails.roomPassword': roomPassword
      });
      
      if (!user) {
        return res.status(401).json({ message: 'Room not found or incorrect password' });
      }

    return res.status(200).json({ message: 'Room entered   successfully' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });   
    }
};