import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        const conenctionString = process.env.MONGODB_URI;
        await mongoose.connect(conenctionString)
        console.log("MongoDB connected");

    } catch (error) {
        console.log(error);
        console.log("Error connecting to MongoDB")
    }
}