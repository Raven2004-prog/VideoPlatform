import mongoose from "mongoose";
import{ DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
        console.log(`Connected to the database!!: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }
    }
    export default connectDB;