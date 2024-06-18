import mongoose, { Schema } from "mongoose";



const RoomSchema = new Schema({
  roomName: {
      type: String,
      required: true
  },
  roomPassword: {
      type: String,
      required: true
  },
  
 
});


export const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
     roomDetails: RoomSchema
});

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;