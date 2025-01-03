import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        const conenctionString = "mongodb+srv://randarademeldev:iwntpgVgk74GDWsa@cluster0.qjxtn.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0"
        await mongoose.connect(conenctionString)
        console.log("MongoDB connected");

    } catch (error) {
        console.log(error);
        console.log("Error connecting to MongoDB")
    }
}