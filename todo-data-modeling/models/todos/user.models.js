import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  // {
  // username:String,
  // email:string,
  // isActive:Boolean
  // },
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      reequired:true
    }
  },{timestamps: true}

);

export const User = mongoose.model('User', userSchema);
