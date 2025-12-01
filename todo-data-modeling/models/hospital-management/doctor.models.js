import mongoose from "mongoose"

const hospitalhours = new mongoose.Schema({
    timeInHour:{
        type:Number,
        required:true
    },
    worksInHospitals:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
            required:true
        }
})


const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[hospitalhours]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)