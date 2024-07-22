import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Pranaykatkar:katkar0315@cluster0.2cxv42o.mongodb.net/food-del').then(()=>console.log("DB connected"))
}